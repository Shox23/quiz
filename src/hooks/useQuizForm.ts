import { useState, useCallback } from "react";
import { useQuizStore } from "@/store/quizStore";
import { QuizConfig } from "@/utils/types/QuizItem";

export const useQuizForm = (categoryId: number) => {
  const [config, setConfig] = useState<QuizConfig>({
    type: "boolean",
    count: 10,
    difficulty: "easy",
  });
  const fetchQuiz = useQuizStore((state) => state.fetchQuiz);
  const loading = useQuizStore((state) => state.isLoading);

  const updateConfig = useCallback((updates: Partial<QuizConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  }, []);

  const submitQuiz = useCallback(() => {
    try {
      fetchQuiz(categoryId, config.type, config.difficulty, config.count);
    } catch (err) {
      console.error("Failed to fetch quiz:", err);
    }
  }, [categoryId, config, fetchQuiz]);

  return {
    config,
    updateConfig,
    submitQuiz,
    loading,
  };
};
