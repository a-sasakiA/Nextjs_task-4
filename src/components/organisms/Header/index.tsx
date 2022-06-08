import { FC } from "react";
import styled from "styled-components";

export const Header: FC = () => {
  return (
    <StHeaderRoot>
      <p>sky ticket</p>
    </StHeaderRoot>
  );
};

const StHeaderRoot = styled.header`
  grid-area: a;
  background-color: rgb(27, 161, 255);
  color: rgb(255, 255, 255);
  font-size: 1.5em;
  width: 100%;
  padding: 10px;
`;
