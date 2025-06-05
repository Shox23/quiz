import { useCategoriesStore } from "@/store/categoriesStore";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const fetchCategories = useCategoriesStore(
    (state) => state.fetchCategoriesAction
  );
  const categories = useCategoriesStore((state) => state.categories);
  useEffect(() => {
    if (!categories.length) {
      fetchCategories();
    }
  }, [categories, fetchCategories]);
  return <Component {...pageProps} />;
}
