import { useCategoriesStore } from "@/store/categoriesStore";
import { useQuizStore } from "@/store/quizStore";
import { Categoryitem } from "@/utils/types/CategoryItem";
import { Spin } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import QuizWidget from "./components/QuizWidget";
import QuizForm from "./components/QuizForm";

export default function CategoryPage() {
  const router = useRouter();
  const [category, setCategory] = useState<Categoryitem | null>(null);
  const getCategory = useCategoriesStore((state) => state.getCategory);
  const categories = useCategoriesStore((state) => state.categories);
  const isLoading = useCategoriesStore((state) => state.isLoading);
  const currentQuiz = useQuizStore((state) => state.quiz);

  useEffect(() => {
    if (router.isReady && router.query.id) {
      const id = Number(router.query.id);
      if (!isNaN(id)) {
        const currentCategory = getCategory(id);
        if (currentCategory) setCategory(currentCategory);
      }
    }
  }, [router.query.id, router.isReady, categories]);

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
