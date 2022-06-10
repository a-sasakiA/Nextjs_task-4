import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { Template } from "../components/templates";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Template title="test">
      <Link href={"/search"} passHref>
        <StLink>検索画面へ</StLink>
      </Link>
      <StButton
        onClick={() => {
          router.push("/search");
        }}
      >
        検索画面へ
      </StButton>
    </Template>
  );
};

export default Home;

const StLink = styled.a`
  color: rgb(27, 161, 255);
`;

const StButton = styled.button`
  margin: 16px;
  border-radius: 3px;
  background-color: rgb(27, 161, 255);
  color: #fff;
  padding: 8px;
`;
