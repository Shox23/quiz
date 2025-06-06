import { fetchCategories } from "@/utils/api/requests/categories";
import { CategoriesStore } from "@/utils/types/CategoriesStore";
import { Categoryitem } from "@/utils/types/CategoryItem";
import { create } from "zustand";

export const useCategoriesStore = create<CategoriesStore>((set, get) => ({
  categories: [],
  isLoading: false,

  fetchCategoriesAction: async () => {
    set({ isLoading: true });
    try {
      const response = await fetchCategories();
      if (response.status == 200) {
        set({ categories: response.data.trivia_categories});
      }
    } catch (error) {
      console.error("Ошибка при загрузке категорий:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  getCategory: (id: number): Categoryitem | undefined => {
    const categories = get().categories;
    return categories.find((item) => item.id == id);
  },
}));
