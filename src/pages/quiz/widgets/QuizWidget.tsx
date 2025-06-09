import { useCallback } from "react";
import { useQuizStore } from "@/store/quizStore";
import { useResultsStore } from "@/store/resultsStore";
import { useQuizLogic } from "@/hooks/useQuizLogic";
import { useQuizInit } from "@/hooks/useQuizInit";
import QuizError from "../components/QuizError/QuizError";
import QuizProgress from "../components/QuizProgress/QuizProgress";
import QuizQuestion from "../components/QuizQuestion/QuizQuestion";
import QuizAnswers from "../components/QuizAnswers/QuizAnswers";
import QuizControls from "../components/QuizControls/QuizControls";
import { SavedAnswer } from "@/utils/types/ResultsStore";

export default function QuizWidget() {
  const quiz = useQuizStore((state) => state.quiz);
  const currentQuestionIdx = useQuizStore((state) => state.currentQuestionIdx);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const setCurrentQuestion = useQuizStore((state) => state.setCurrentQuestion);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const saveAnswer = useResultsStore((state) => state.saveAnswer);

  const handleInitialize = useCallback(() => {
    setCurrentQuestion(0);
  }, [setCurrentQuestion]);

  const handleNextQuestion = useCallback(() => {
    nextQuestion();
  }, [nextQuestion]);

  const handleSaveAnswer = useCallback(
    (answer: SavedAnswer) => {
      saveAnswer(answer);
    },
    [saveAnswer]
  );

  useQuizInit({ onInitialize: handleInitialize });

  const {
    answers,
    chosenAnswer,
    progressPercent,
    canSubmit,
    handleAnswerSelect,
    handleSubmit,
  } = useQuizLogic({
    currentQuestion,
    currentQuestionIdx,
    totalQuestions: quiz.length,
    onNextQuestion: handleNextQuestion,
    onSaveAnswer: handleSaveAnswer,
  });

  if (currentQuestion === null) {
    return <QuizError text="Question not found" />
  }

  return (
    <div className="quiz-widget">
      <QuizProgress
        percent={progressPercent}
        current={currentQuestionIdx}
        total={quiz.length}
      />

      <QuizQuestion question={currentQuestion.question} />

      <QuizAnswers
        answers={answers}
        selectedAnswer={chosenAnswer}
        onAnswerSelect={handleAnswerSelect}
      />

      <QuizControls onSubmit={handleSubmit} canSubmit={canSubmit} />
    </div>
  );
}
