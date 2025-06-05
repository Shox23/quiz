import { useCategoriesStore } from "@/store/categoriesStore";
import { Card, Spin } from "antd";
import Link from "next/link";

export default function Home() {
  const categories = useCategoriesStore((state) => state.categories);
  const isLoading = useCategoriesStore((state) => state.isLoading);

  return (
    <>
      <div className="container">
        <h2 className="page-title">Choose category</h2>
        <div className="list">
          {isLoading ? (
            <Spin />
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
