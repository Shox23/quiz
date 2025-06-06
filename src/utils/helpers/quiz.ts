import { QuizItem } from "../types/QuizItem";
import { SavedAnswer } from "../types/ResultsStore";

export class QuizUtils {
  static shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  static calculateProgress(current: number, total: number): number {
    return total > 0 ? Math.round(((current + 1) / total) * 100) : 0;
  }

  static prepareAnswers(question: QuizItem): string[] {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];
    return this.shuffleArray(allAnswers);
  }

  static createSavedAnswer(
    chosenAnswer: string,
    question: QuizItem
  ): SavedAnswer {
    return {
      chosen_answer: chosenAnswer,
      correct_answer: question.correct_answer,
      question: question.question,
    };
  }
}
