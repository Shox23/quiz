import { Progress } from "antd";
import { memo } from "react";
import { QuizProgressProps } from "./types";

export const QuizProgress = memo<QuizProgressProps>(
  ({ percent, current, total }) => (
    <Progress
      percent={percent}
      status="active"
      format={() => `${current + 1}/${total}`}
    />
  )
);

QuizProgress.displayName = "QuizProgress";
