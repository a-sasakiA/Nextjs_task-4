import { FC, useContext, useEffect } from "react";
import { Category } from "src/pages/api/skills/[skills]";
import {
  DispatchSearchConditionContext,
  SearchConditionContext,
  useDispatchSearchCondition,
  useSearchCondition,
} from "src/pages/search";
import styled from "styled-components";
import useCategory from "../TopContent/hooks/useCategory";

type Props = {};

export const Search: FC<Props> = () => {
  return (
    <div>
      <CategoryList />
      <DisplayCategoryList />
      <AAA />
      <BBB />
    </div>
  );
};

const AAA: FC = () => {
  console.log("aaa");
  const dispatch = useDispatchSearchCondition();
  const handleClick = () => {
    dispatch({ type: "RESET_CATEGORY_LIST" });
  };
  return <div onClick={handleClick}>aaaa</div>;
};

const BBB: FC = () => {
  console.log("bbbbbb");
  return <div>bbbbbb</div>;
};

const CategoryList: FC = () => {
  const { category, getCategory } = useCategory();
  useEffect(() => {
    getCategory();
  }, []);

  const dispatch = useDispatchSearchCondition();
  console.log("Category List");

  const handleCategoryList = (category: Category) => {
    dispatch({ type: "UPDATE_CATEGORY_LIST", category });
  };

  return (
    <StListWrapper>
      {category.map((c) => {
        return (
          <StList
            key={"categoryList" + c.id}
            value={c.value}
            onClick={() => {
              handleCategoryList(c);
            }}
          >
            {c.value}
          </StList>
        );
      })}
    </StListWrapper>
  );
};

const DisplayCategoryList: FC = () => {
  const { displayCategoryList } = useSearchCondition();
  return (
    <StListWrapper>
      {displayCategoryList.map((c) => {
        return <StList key={"list" + c.id}>{c.value}</StList>;
      })}
    </StListWrapper>
  );
};

const StRoot = styled.div``;
const StListWrapper = styled.div``;
const StList = styled.li``;
