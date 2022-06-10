import { NextPage } from "next";
import Link from "next/link";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { Search } from "src/components/organisms/Search";
import { Template } from "src/components/templates";
import { Category } from "../api/skills/[skills]";

export type SearchConditionType = {
  displayCategoryList: Category[];
};

const defaultState: SearchConditionType = {
  displayCategoryList: [],
};

export type DispatchSearchConditionType = Dispatch<Action>;

export const defaultSetValue: DispatchSearchConditionType = () => {};

export const SearchConditionContext =
  createContext<SearchConditionType>(defaultState);
export const DispatchSearchConditionContext =
  createContext<DispatchSearchConditionType>(defaultSetValue);

export const useSearchCondition = () => {
  return useContext(SearchConditionContext);
};

export const useDispatchSearchCondition = () => {
  return useContext(DispatchSearchConditionContext);
};

type Action =
  | { type: "UPDATE_CATEGORY_LIST"; category: Category }
  | { type: "RESET_CATEGORY_LIST" };

const reducer = (state: SearchConditionType, action: Action) => {
  switch (action.type) {
    case "UPDATE_CATEGORY_LIST":
      if (
        state.displayCategoryList.some((cl) => cl.id === action.category.id)
      ) {
        const tempCategory = state.displayCategoryList.filter(
          (cl) => cl.id !== action.category.id
        );
        return { ...state, displayCategoryList: tempCategory };
      } else {
        const tempCategory = [...state.displayCategoryList, action.category];
        return { ...state, displayCategoryList: tempCategory };
      }
      break;
    case "RESET_CATEGORY_LIST":
      return { ...state, displayCategoryList: [] };
      break;

    default:
      return state;
      break;
  }
};

const useSearchCore = (initialState?: SearchConditionType) => {
  console.log("useSearchCoreが呼び出された");

  const [state, dispatch] = useReducer(reducer, initialState ?? defaultState);
  return { state, dispatch };
};

type Props = {
  initialState?: SearchConditionType;
  children: ReactNode;
};

const SearchConditionProvider: FC<Props> = ({ initialState, children }) => {
  const { state, dispatch } = useSearchCore(initialState);
  console.log("SearchConditionProviderがレンダリング");
  return (
    <SearchConditionContext.Provider value={state}>
      <DispatchSearchConditionContext.Provider value={dispatch}>
        {children}
      </DispatchSearchConditionContext.Provider>
    </SearchConditionContext.Provider>
  );
};

const SearchPage: NextPage = () => {
  return (
    <SearchConditionProvider>
      <Template title="test">
        <Search />
      </Template>
    </SearchConditionProvider>
  );
};

export default SearchPage;

// const SearchPage: NextPage = () => {
//   const [displayCategoryList, setDisplayCategoryList] = useState<Category[]>(
//     []
//   );
//   const handleCategoryList = (category: Category) => {
//     if (displayCategoryList.some((cl) => cl.id === category.id)) {
//       const tempCategory = displayCategoryList.filter(
//         (cl) => cl.id !== category.id
//       );
//       setDisplayCategoryList(tempCategory);
//     } else {
//       setDisplayCategoryList([...displayCategoryList, category]);
//     }
//   };

//   return (
//     <SearchConditionContext.Provider
//       value={{ displayCategoryList, handleCategoryList }}
//     >
//       <Template title="test">
//         <Search />
//       </Template>
//     </SearchConditionContext.Provider>
//   );
// };

// export default SearchPage;
