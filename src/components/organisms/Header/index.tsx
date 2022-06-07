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
  background-color: rgb(27, 161, 255);
  color: rgb(255, 255, 255);
  width: 100%;
`;
