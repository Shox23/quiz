import { useCategoriesStore } from "@/store/categoriesStore";
import { useQuizStore } from "@/store/quizStore";
import { Card, Spin } from "antd";
import Link from "next/link";
import { useEffect } from "react";
import QuizError from "./quiz/components/QuizError/QuizError";

export default function Home() {
  const categories = useCategoriesStore((state) => state.categories);
  const isLoading = useCategoriesStore((state) => state.isLoading);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  useEffect(() => {
    resetQuiz();
  });

  if (isLoading) {
    return (
      <div className="container loader-container">
        <Spin size="large" />
        <p className="loader-text">Loading category...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <h2 className="page-title">Choose category</h2>
        <ul className="list">
          {categories.map((item) => (
            <Card key={item.id}>
              <Link href={`/quiz/${item.id}`}>{item.name}</Link>
            </Card>
          ))}
        </ul>
      </div>
    </>
  );
}
