import { FC, memo } from "react";
import { QuizQuestionProps } from "../../../../utils/types/QuizQuestionProps";

const QuizQuestion = memo(({ question }) => (
  <div>
    <h3 className="quiz-widget__title">{question}</h3>
  </div>
)) as FC<QuizQuestionProps>;

QuizQuestion.displayName = "QuizQuestion";
export default QuizQuestion;
