import { fetchQuiz } from "@/utils/api/requests/quiz";
import { QuizDifficulty, QuizType } from "@/utils/types/QuizItem";
import { QuizStore } from "@/utils/types/QuizStore";
import { create } from "zustand";

export const useQuizStore = create<QuizStore>((set, get) => ({
  quiz: [],
  isLoading: false,

  fetchQuiz: async (
    id: number,
    type: QuizType,
    difficulty: QuizDifficulty,
    amount: number
  ) => {
    set({ isLoading: false });
    try {
      const response = await fetchQuiz(id, type, difficulty, amount);
      if (response.status == 200) {
        set({ quiz: response.data.results });
      }
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
