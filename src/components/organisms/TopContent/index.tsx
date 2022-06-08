import { FC, useState } from "react";
import { Counter } from "src/components/molecules/Counter";
import styled from "styled-components";

export const TopContent: FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <StRoot>
      <StTitle>
        <h1>react初心者向け講座</h1>
      </StTitle>
      <StContent>
        <StArticle>
          <StArticleTitle>カウント</StArticleTitle>
          <Counter
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
          />
        </StArticle>
      </StContent>
    </StRoot>
  );
};

const StRoot = styled.div``;

const StTitle = styled.div``;

const StContent = styled.div``;

const StArticle = styled.article``;

const StArticleTitle = styled.h2``;
