import type { NextPage } from "next";
import styled from "styled-components";

import { Template } from "../components/templates";

const Home: NextPage = () => (
  <Template title="test">
    <StMainRoot>
      <StMainParagraph>react初心者向け講座</StMainParagraph>
    </StMainRoot>
  </Template>
);

export default Home;

const StMainRoot = styled.div`
  grid-area: b;
  background-color: rgb(245 245 245);
  margin: 20px 10px 0;
`;

const StMainParagraph = styled.p`
  background-color: rgb(255 255 255);
  padding: 15px 10px;
  color: rgb(0, 0, 0);
  font-size: 2em;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0);
`;
