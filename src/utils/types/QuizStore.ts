import { QuizDifficulty, QuizItem, QuizType } from "./QuizItem";

export interface QuizStore {
  quiz: QuizItem[];
  isLoading: boolean;

  fetchQuiz: (
    id: number,
    type: QuizType,
    difficulty: QuizDifficulty,
    amount: number
  ) => void;
}
