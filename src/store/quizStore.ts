import { fetchQuiz } from "@/utils/api/requests/quiz";
import { QuizDifficulty, QuizItem, QuizType } from "@/utils/types/QuizItem";
import { QuizStore } from "@/utils/types/QuizStore";
import { decode } from "he";
import { create } from "zustand";

export const useQuizStore = create<QuizStore>((set) => ({
  quiz: [],
  isLoading: false,
  currentQuestion: null,
  currentQuestionIdx: 0,

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
        const processedQuestions = response.data.results.map(
          (question: QuizItem) => ({
            ...question,
            question: decode(question.question),
            correct_answer: decode(question.correct_answer),
            incorrect_answers: question.incorrect_answers.map(
              (answer: string) => decode(answer)
            ),
          })
        );
        set({ quiz: processedQuestions });
      }
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  setCurrentQuestion: (index: number) =>
    set((state) => ({
      currentQuestionIdx: index,
      currentQuestion: state.quiz[index] || null,
    })),

  nextQuestion: () =>
    set((state) => {
      const nextIndex = state.currentQuestionIdx + 1;

      console.log(nextIndex);
      return {
        currentQuestionIdx: nextIndex,
        currentQuestion: state.quiz[nextIndex] || null,
      };
    }),
  resetQuiz: () => {
    set({ currentQuestion: null, quiz: [] });
  },
}));
