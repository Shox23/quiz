import { UseQuizInitProps } from '@/utils/types/QuizInitProps';
import { useEffect } from 'react';

export const useQuizInit = ({ onInitialize }: UseQuizInitProps) => {
  useEffect(() => {
    onInitialize();
  }, [onInitialize]);
};