import { Radio, RadioChangeEvent } from "antd";
import { FC, memo, useCallback } from "react";
import { QuizAnswersProps } from "./types";

export const QuizAnswers: FC<QuizAnswersProps> = memo(({ 
  answers, 
  selectedAnswer, 
  onAnswerSelect 
}) => {
  const handleChange = useCallback((e: RadioChangeEvent) => {
    onAnswerSelect(e.target.value);
  }, [onAnswerSelect]);

  return (
    <div>
      <Radio.Group
        value={selectedAnswer}
        onChange={handleChange}
        options={answers}
      />
    </div>
  );
});

QuizAnswers.displayName = 'QuizAnswers';