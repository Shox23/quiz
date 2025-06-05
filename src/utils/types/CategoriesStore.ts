import { Categoryitem } from "./CategoryItem";

export interface CategoriesStore {
  categories: Categoryitem[];
  isLoading: boolean;

  fetchCategoriesAction: () => void;
  getCategory: (id: number) => Categoryitem | undefined;
}
