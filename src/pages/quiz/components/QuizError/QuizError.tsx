import { QuizErrorProps } from "@/utils/types/QuizErrorProps";
import { Result } from "antd";
import { FC, memo } from "react";

const QuizError: FC<QuizErrorProps> = memo(({ text, title }) => (
  <Result status="error" title={title} subTitle={text}></Result>
));

QuizError.displayName = "QuizError";
export default QuizError;
