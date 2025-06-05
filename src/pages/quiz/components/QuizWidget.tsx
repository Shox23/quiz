import { useQuizStore } from "@/store/quizStore";

export default function QuizWidget() {
  const quiz = useQuizStore((state) => state.quiz);

  return (
    <div>
      {quiz.map(item=> (<div key={item.id}></div>))}
    </div>
  );
}
