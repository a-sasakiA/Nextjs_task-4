import type { NextPage } from "next";
import styled from "styled-components";

import { Template } from "../components/templates";

const Home: NextPage = () => (
  <Template title="test">
    <TsMainRoot>
      <TsParagraph>react初心者向け講座</TsParagraph>
    </TsMainRoot>
  </Template>
);

export default Home;

const TsMainRoot = styled.div`
  grid-area: b;
  background-color: rgb(245 245 245);
  margin: 20px 10px 0;
`;

const TsParagraph = styled.p`
  background-color: rgb(255 255 255);
  padding: 15px 10px;
  color: rgb(0, 0, 0);
  font-size: 2em;
  font-weight: bold;
  border: 1px solid rgb(0, 0, 0);
`;
