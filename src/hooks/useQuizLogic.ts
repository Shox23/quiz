import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { QuizUtils } from '@/utils/helpers/quiz';
import { UseQuizLogicProps } from '@/utils/types/QuizLogicProps';

export const useQuizLogic = ({
  currentQuestion,
  currentQuestionIdx,
  totalQuestions,
  onNextQuestion,
  onSaveAnswer
}: UseQuizLogicProps) => {
  const router = useRouter();
  const [answers, setAnswers] = useState<string[]>([]);
  const [chosenAnswer, setChosenAnswer] = useState<string>('');

  const isLastQuestion = currentQuestionIdx === totalQuestions - 1;
  
  const progressPercent = QuizUtils.calculateProgress(
    currentQuestionIdx,
    totalQuestions
  );

  const handleAnswerSelect = useCallback((value: string) => {
    setChosenAnswer(value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!currentQuestion || !chosenAnswer) return;

    const savedAnswer = QuizUtils.createSavedAnswer(chosenAnswer, currentQuestion);
    onSaveAnswer(savedAnswer);

    if (isLastQuestion) {
      router.push('/results');
    } else {
      onNextQuestion();
    }
  }, [currentQuestion, chosenAnswer, isLastQuestion, onSaveAnswer, onNextQuestion, router]);

  useEffect(() => {
    if (currentQuestion) {
      const shuffledAnswers = QuizUtils.prepareAnswers(currentQuestion);
      setAnswers(shuffledAnswers);
      setChosenAnswer('');
    }
  }, [currentQuestion]);

  return {
    answers,
    chosenAnswer,
    progressPercent,
    canSubmit: Boolean(chosenAnswer),
    handleAnswerSelect,
    handleSubmit
  };
};