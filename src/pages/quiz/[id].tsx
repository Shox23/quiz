import { useCategoriesStore } from "@/store/categoriesStore";
import { useQuizStore } from "@/store/quizStore";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { useMemo } from "react";
import QuizWidget from "./widgets/QuizWidget";
import QuizForm from "./widgets/QuizForm";

export default function CategoryPage() {
  const router = useRouter();
  const getCategory = useCategoriesStore((state) => state.getCategory);
  const isLoading = useCategoriesStore((state) => state.isLoading);
  const currentQuiz = useQuizStore((state) => state.quiz);

  const categoryId = useMemo(() => {
    if (!router.isReady || !router.query.id) return null;
    const id = Array.isArray(router.query.id)
      ? router.query.id[0]
      : router.query.id;
    const numericId = Number(id);
    return isNaN(numericId) ? null : numericId;
  }, [router.isReady, router.query.id]);

  const category = useMemo(() => {
    if (!categoryId) return null;
    return getCategory(categoryId);
  }, [categoryId, getCategory]);

  if (!router.isReady || isLoading) {
    return <Spin />;
  }

  if (!category) {
    return <p>Категория не найдена</p>;
  }

  return (
    <div className="container">
      <h2 className="page-title">Category: {category.name}</h2>
      {currentQuiz.length ? <QuizWidget /> : <QuizForm id={category.id} />}
    </div>
  );
}
