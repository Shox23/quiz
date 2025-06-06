import { FC, memo } from "react";
import { QuizInputProps } from "../../../../utils/types/QuizInputProps";
import { InputNumber } from "antd";

const QuizInput: FC<QuizInputProps> = memo(
  ({ value, onChange }) => {
    const handleChange = (val: number | null) => {
      const count = val ?? 10;
      onChange(Math.max(5, Math.min(50, count)));
    };

    return (
      <InputNumber
        min={5}
        max={50}
        value={value}
        onChange={handleChange}
        placeholder="5-50"
        aria-label="Number of quiz questions"
      />
    );
  }
);

QuizInput.displayName = "QuizInput";
export default QuizInput