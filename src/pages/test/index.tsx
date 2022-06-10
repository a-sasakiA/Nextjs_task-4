import * as React from "react";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useState,
  useContext,
  memo,
  useReducer,
} from "react";

type Props = {
  children: ReactNode;
};

// export type CountType = {
//   count: number;
// };

// const countValue: CountType = {
//   count: 0,
// };

// export type DispatchCountType = {
//   dispatch: Dispatch<Action>;
// };

// const dispatchCountValue: DispatchCountType = { dispatch: () => {} };

// type Action = {
//   type: "INCREMENT";
// };

// const reducer = (state: CountType, action: Action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { count: state.count + 1 };
//   }
// };

// const useCount = () => {
//   const [state, dispatch] = useReducer(reducer, countValue);
//   return { state, dispatch };
// };

// const Count: FC = () => {
//   console.log("reRender");
//   const { state, dispatch } = useCount();
//   return (
//     <>
//       <CountButton dispatch={dispatch} />
//       <CountNum count={state.count} />
//     </>
//   );
// };

// const CountButton: FC<DispatchCountType> = memo(({ dispatch }) => {
//   console.log("rerender function");
//   return (
//     <button
//       onClick={() => {
//         dispatch({ type: "INCREMENT" });
//       }}
//     >
//       count
//     </button>
//   );
// });

// const CountNum: FC<CountType> = memo(({ count }) => {
//   console.log("rerender number");
//   return <div>{count}</div>;
// });

export type CountType = {
  count: number;
};

const countValue: CountType = {
  count: 0,
};

export type DispatchCountType = Dispatch<Action>;

const dispatchCountValue: DispatchCountType = () => {};

export const CountContext = createContext<CountType>(countValue);
export const DispatchCountContext =
  createContext<DispatchCountType>(dispatchCountValue);

type Action = {
  type: "INCREMENT";
};

// action create
const reducer = (state: CountType, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
  }
};

const useCount = () => {
  const [state, dispatch] = useReducer(reducer, countValue);
  return { state, dispatch };
};

const CountProvider: FC<Props> = ({ children }) => {
  const { state, dispatch } = useCount();
  return (
    <CountContext.Provider value={state}>
      <DispatchCountContext.Provider value={dispatch}>
        {children}
      </DispatchCountContext.Provider>
    </CountContext.Provider>
  );
};

const Count: FC = () => {
  console.log("reRender");
  return (
    <CountProvider>
      <CountButton />
      <CountNum />
    </CountProvider>
  );
};

const CountButton: FC = ({}) => {
  const dispatch = useContext(DispatchCountContext);
  console.log("rerender function");
  return (
    <button
      onClick={() => {
        dispatch({ type: "INCREMENT" });
      }}
    >
      count
    </button>
  );
};

const CountNum: FC = ({}) => {
  const { count } = useContext(CountContext);
  console.log("rerender number");
  return <div>{count}</div>;
};

export default Count;
