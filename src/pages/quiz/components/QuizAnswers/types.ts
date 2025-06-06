export interface QuizAnswersProps {
  answers: string[];
  selectedAnswer: string;
  onAnswerSelect: (answer: string) => void;
}