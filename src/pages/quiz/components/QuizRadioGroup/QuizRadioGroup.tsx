import { Flex, Radio, RadioChangeEvent } from "antd";
import { QuizRadioGroupProps } from "../../../../utils/types/QuizRadioGroupProps";
import { FC, memo } from "react";

const QuizRadioGroup: FC<QuizRadioGroupProps> = memo(
  ({ value, options, onChange }) => {
    const handleChange = (e: RadioChangeEvent) => {
      onChange(e.target.value);
    };

    return (
      <Flex vertical gap="middle">
        <Radio.Group
          onChange={handleChange}
          value={value}
          optionType="button"
          options={options}
        />
      </Flex>
    );
  }
);

QuizRadioGroup.displayName = "QuizRadioGroup";
export default QuizRadioGroup;
