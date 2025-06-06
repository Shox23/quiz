import { memo } from "react";

export const QuizError = memo(() => (
  <div className="quiz-widget__error">
    <h2>Question not found</h2>
  </div>
));

QuizError.displayName = "QuizError";
