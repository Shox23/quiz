import { ResultsStore } from "@/utils/types/ResultsStore";
import { create } from "zustand";

export const useResultsStore = create<ResultsStore>((set) => ({
  savedAnswers: [],
  correctAnswers: [],

  saveAnswer: (data) => {
    set((state) => {
      const newSavedAnswers = [...state.savedAnswers, data];
      const newCorrectAnswers = newSavedAnswers
        .filter((item) => item.chosen_answer === item.correct_answer)
        .map((item) => item.chosen_answer);

      return {
        savedAnswers: newSavedAnswers,
        correctAnswers: newCorrectAnswers
      };
    });
  },
}));
