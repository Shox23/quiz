export interface QuizRadioGroupProps {
  value: string;
  options: QuizRadioOption[];
  onChange: (value: string) => void;
}

export interface QuizRadioOption {
  value: string;
  label: string;
}
