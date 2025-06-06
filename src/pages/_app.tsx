import { useCategoriesStore } from "@/store/categoriesStore";
import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { Header } from "antd/es/layout/layout";
import type { AppProps } from "next/app";
import Link from "next/link";
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
  return (
    <ConfigProvider>
      <Header className="header">
        <Link href="/">Go to categories</Link>
      </Header>
      <Component {...pageProps} />;
    </ConfigProvider>
  );
}
