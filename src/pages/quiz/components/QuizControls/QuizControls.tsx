import { Button } from "antd";
import { memo } from "react";
import { QuizControlsProps } from "../../../../utils/types/QuizControlsProps";

const QuizControls = memo<QuizControlsProps>(
  ({ onSubmit, canSubmit }) => (
    <div className="quiz-widget__buttons">
      <Button onClick={onSubmit} type="primary" disabled={!canSubmit}>
        Submit
      </Button>
    </div>
  )
);

QuizControls.displayName = "QuizControls";
export default QuizControls;