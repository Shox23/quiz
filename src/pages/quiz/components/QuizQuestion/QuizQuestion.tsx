import { FC, memo } from "react";
import { QuizQuestionProps } from "./types";

export const QuizQuestion = memo(({ question }) => (
  <div>
    <h3 className="quiz-widget__title">{question}</h3>
  </div>
)) as FC<QuizQuestionProps>;

QuizQuestion.displayName = "QuizQuestion";
