export interface ResultsStore {
  savedAnswers: SavedAnswer[];
  correctAnswers: string[];
  saveAnswer: (data: SavedAnswer) => void;
}

export interface SavedAnswer {
  question: string;
  correct_answer: string;
  chosen_answer: string;
}
