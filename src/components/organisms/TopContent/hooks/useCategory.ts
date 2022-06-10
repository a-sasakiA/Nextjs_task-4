//   category
// currentCategory
// handleChangeCategory

import { useState } from "react";
import {
  CategoryList,
  CurrentCategory,
} from "src/components/molecules/SkillArea";

export const useCategory = () => {
  // カテゴリリスト
  let optionId: string;
  const [category, setCategory] = useState<CategoryList[]>([]);
  const [currentCategory, setCurrentCategory] = useState<CurrentCategory>({});
  const handleChangeCategory = (value: string) => {
    const options = document.querySelectorAll("option");
    options.forEach((value, index) => {
      if (options[index].selected === true) {
        optionId = options[index].id;
      }
    });
    setCurrentCategory({ value, optionId });
  };
  const getCategory = async () => {
    // category Api
    try {
      const res_category = await fetch("/api/skills/category");
      const data_category = await res_category.json();

      setCategory([...data_category]);
    } catch (error) {
      console.log(`Error Message: ${error}`);
    }
  };

  return { category, currentCategory, handleChangeCategory, getCategory };
};

export default useCategory;
