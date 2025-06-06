import { QuizItem } from "./QuizItem";
import { SavedAnswer } from "./ResultsStore";

export interface UseQuizLogicProps {
  currentQuestion: QuizItem | null;
  currentQuestionIdx: number;
  totalQuestions: number;
  onNextQuestion: () => void;
  onSaveAnswer: (answer: SavedAnswer) => void;
}