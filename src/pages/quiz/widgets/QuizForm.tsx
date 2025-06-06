import { useQuizForm } from "@/hooks/useQuizForm";
import { QuizFormProps } from "@/utils/types/QuizForm";
import { QuizDifficulty, QuizType } from "@/utils/types/QuizItem";
import { Button } from "antd";
import { FormEvent } from "react";
import { QuizRadioGroup } from "../components/QuizRadioGroup/QuizRadioGroup";
import { FormField } from "../components/QuizFormField/QuizFormField";
import { QUIZ_OPTIONS } from "@/utils/constants/quisOptions";
import { QuizCountInput } from "../components/QuizInput/QuizInput";

export default function QuizForm({ id }: QuizFormProps) {
  const { config, updateConfig, submitQuiz, loading } = useQuizForm(id);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    submitQuiz();
  };

  const handleTypeChange = (type: string) => {
    updateConfig({ type: type as QuizType });
  };

  const handleDifficultyChange = (difficulty: string) => {
    updateConfig({ difficulty: difficulty as QuizDifficulty });
  };

  const handleCountChange = (count: number) => {
    updateConfig({ count });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="quiz-widget">
        <FormField title="Number of Questions" id="quiz-count-field">
          <QuizCountInput value={config.count} onChange={handleCountChange} />
        </FormField>

        <FormField title="Quiz Type" id="quiz-type-field">
          <QuizRadioGroup
            value={config.type}
            options={QUIZ_OPTIONS.TYPE}
            onChange={handleTypeChange}
          />
        </FormField>

        <FormField title="Quiz Difficulty" id="quiz-difficulty-field">
          <QuizRadioGroup
            value={config.difficulty}
            options={QUIZ_OPTIONS.DIFFICULTY}
            onChange={handleDifficultyChange}
          />
        </FormField>
      </div>

      <div className="quiz-widget__buttons">
        <Button
          htmlType="submit"
          type="primary"
          loading={loading}
          disabled={loading}
          size="large"
        >
          {loading ? "Loading..." : "Start Quiz"}
        </Button>
      </div>
    </form>
  );
}
