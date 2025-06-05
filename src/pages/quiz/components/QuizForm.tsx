import { useQuizStore } from "@/store/quizStore";
import { QuizFormProps } from "@/utils/types/QuizForm";
import { QuizDifficulty, QuizType } from "@/utils/types/QuizItem";
import {
  Button,
  Flex,
  InputNumber,
  InputNumberProps,
  Radio,
  RadioChangeEvent,
} from "antd";
import { FormEvent, useState } from "react";

export default function QuizForm({ id }: QuizFormProps) {
  const [quizType, setQuizType] = useState<QuizType>("boolean");
  const [quizCount, setQuizCount] = useState<number>(10);
  const [quizDifficulty, setQuizDifficulty] = useState<QuizDifficulty>("easy");
  const fetchQuiz = useQuizStore((state) => state.fetchQuiz);

  const onCountChange: InputNumberProps["onChange"] = (value) => {
    let count = Number(value);
    setQuizCount(count);
  };
  const onTypeChange = (e: RadioChangeEvent) => {
    setQuizType(e.target.value);
  };
  const onDifficultyChange = (e: RadioChangeEvent) => {
    setQuizDifficulty(e.target.value);
  };
  const getQuiz = (event: FormEvent) => {
    event.preventDefault();
    fetchQuiz(id, quizType, quizDifficulty, quizCount);
    console.log(quizCount, quizType, quizDifficulty);
  };

  return (
    <form onSubmit={getQuiz} className="form">
      <div className="form__wrapper">
        <div>
          <h3>Select quiz type</h3>
          <InputNumber
            min={1}
            max={50}
            value={quizCount}
            onChange={onCountChange}
          />
        </div>
        <div>
          <h3>Select quiz type</h3>
          <Flex vertical gap="middle">
            <Radio.Group
              onChange={onTypeChange}
              value={quizType}
              optionType="button"
              options={[
                { value: "boolean", label: "Two answers" },
                { value: "multiple", label: "Multiple answers" },
              ]}
            />
          </Flex>
        </div>
        <div>
          <h3>Select quiz difficulty</h3>
          <Flex vertical gap="middle">
            <Radio.Group
              onChange={onDifficultyChange}
              value={quizDifficulty}
              optionType="button"
              options={[
                { value: "easy", label: "Easy" },
                { value: "medium", label: "Medium" },
                { value: "hard", label: "Hard" },
              ]}
            />
          </Flex>
        </div>
      </div>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </form>
  );
}
