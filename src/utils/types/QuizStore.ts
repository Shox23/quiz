import { QuizDifficulty, QuizItem, QuizType } from "./QuizItem";

export interface QuizStore {
  quiz: QuizItem[];
  isLoading: boolean;
  currentQuestion: QuizItem | null;
  currentQuestionIdx: number;

  fetchQuiz: (
    id: number,
    type: QuizType,
    difficulty: QuizDifficulty,
    amount: number
  ) => void;
  setCurrentQuestion: (index: number) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}
