import { useCategoriesStore } from "@/store/categoriesStore";
import { useQuizStore } from "@/store/quizStore";
import { Card, Spin } from "antd";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const categories = useCategoriesStore((state) => state.categories);
  const isLoading = useCategoriesStore((state) => state.isLoading);
  const resetQuiz = useQuizStore((state) => state.resetQuiz);

  useEffect(() => {
    resetQuiz();
  });
  return (
    <>
      <div className="container">
        <h2 className="page-title">Choose category</h2>
        <div className="list">
          {isLoading ? (
            <div className="loader-container">
              <Spin />
              <p className="loader-text">Loading categories</p>
            </div>
          ) : (
            categories.map((item) => (
              <Card key={item.id}>
                <Link href={`/quiz/${item.id}`}>{item.name}</Link>
              </Card>
            ))
          )}
        </div>
      </div>
    </>
  );
}
