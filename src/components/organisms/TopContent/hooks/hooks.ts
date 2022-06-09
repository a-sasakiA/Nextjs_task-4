import { useCallback, useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);
  console.log("----------rendering----------");
  const handleIncrement = useCallback(() => {
    console.log("----------Count rendering(Increment)----------");
    return setCount(count + 1);
  }, [count]);
  const handleDecrement = useCallback(() => {
    console.log("----------Count rendering(Decrement)----------");
    return setCount(count - 1);
  }, [count]);
  const resetCount = useCallback(() => {
    console.log("----------execute resetCount----------");
    return setCount(0);
  }, []);

  return { count, handleIncrement, handleDecrement, resetCount };
};
