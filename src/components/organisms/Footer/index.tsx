import { FC } from "react";
import styled from "styled-components";

export const Footer: FC = () => {
  return (
    <StFooterRoot>
      <p>sky ticket</p>
    </StFooterRoot>
  );
};

const StFooterRoot = styled.footer`
  grid-area: c;
  background-color: rgb(0, 0, 0);
  font-size: 1.5em;
  color: rgb(255, 255, 255);
  width: 100%;
  padding: 10px;
`;
