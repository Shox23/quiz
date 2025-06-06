import { useQuizStore } from "@/store/quizStore";
import { useResultsStore } from "@/store/resultsStore";
import { SavedAnswer } from "@/utils/types/ResultsStore";
import { Button, Progress, Radio, RadioChangeEvent } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function QuizWidget() {
  const router = useRouter();
  const quiz = useQuizStore((state) => state.quiz);
  const currentQuestionIdx = useQuizStore((state) => state.currentQuestionIdx);
  const setCurrentQuestion = useQuizStore((state) => state.setCurrentQuestion);
  const nextQuestion = useQuizStore((state) => state.nextQuestion);
  const currentQuestion = useQuizStore((state) => state.currentQuestion);
  const saveAnswer = useResultsStore((state) => state.saveAnswer);

  const [answers, setAnswers] = useState<string[]>([]);
  const [chosenAnswer, setChosenAnswer] = useState<string>("");

  const progressPercent =
    quiz.length > 0
      ? Math.round(((currentQuestionIdx + 1) / quiz.length) * 100)
      : 0;

  const handleAnswerChoose = (e: RadioChangeEvent) => {
    setChosenAnswer(e.target.value);
  };

  const goToNextQuestion = () => {
    if (currentQuestion) {
      const answer: SavedAnswer = {
        chosen_answer: chosenAnswer,
        correct_answer: currentQuestion.correct_answer,
        question: currentQuestion.question,
      };
      saveAnswer(answer);

      if (quiz.length == currentQuestionIdx + 1) {
        router.push("/results");
      } else {
        nextQuestion();
        console.log(currentQuestion);
      }
    }
  };

  const shuffleAnswers = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setCurrentQuestion(0);
  }, []);

  useEffect(() => {
    if (currentQuestion) {
      let allAnswers = [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ];
      setAnswers(shuffleAnswers([...allAnswers]));
      allAnswers.push(currentQuestion.correct_answer);
      setChosenAnswer("");
    }
  }, [currentQuestion]);

  if (currentQuestion === null) {
    return <h2>Question not found</h2>;
  }

  return (
    <div className="quiz-widget">
      <Progress
        percent={progressPercent}
        status="active"
        format={() => `${currentQuestionIdx + 1}/${quiz.length}`}
      />
      <div>
        <h3 className="quiz-widget__title">{currentQuestion.question}</h3>
      </div>
      <div>
        <Radio.Group
          value={chosenAnswer}
          onChange={handleAnswerChoose}
          options={answers}
        />
      </div>
      <div className="quiz-widget__buttons">
        <Button onClick={goToNextQuestion} type="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}
