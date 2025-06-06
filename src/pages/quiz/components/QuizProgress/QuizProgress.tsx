import { Progress } from "antd";
import { memo } from "react";
import { QuizProgressProps } from "../../../../utils/types/QuizProgressProps";

const QuizProgress = memo<QuizProgressProps>(
  ({ percent, current, total }) => (
    <Progress
      percent={percent}
      status="active"
      format={() => `${current + 1}/${total}`}
    />
  )
);

QuizProgress.displayName = "QuizProgress";
export default QuizProgress