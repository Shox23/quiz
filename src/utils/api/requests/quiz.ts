import { QuizDifficulty, QuizType } from "@/utils/types/QuizItem";
import apiInstance from "../instance";

export const fetchQuiz = async (
  id: number,
  type: QuizType,
  difficulty: QuizDifficulty,
  amount: number
) => {
  return await apiInstance.get(
    `api.php?amount=${amount}&category=${id}&difficulty=${difficulty}&type=${type}`
  );
};
