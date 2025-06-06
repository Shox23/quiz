export interface QuizItem {
  type: QuizType;
  difficulty: QuizDifficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type QuizType = "boolean" | "multiple";
export type QuizDifficulty = "easy" | "medium" | "hard";

export interface QuizConfig {
  type: QuizType;
  count: number;
  difficulty: QuizDifficulty;
}
