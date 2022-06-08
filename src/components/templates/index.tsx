import Head from "next/head";
import { FC, ReactNode } from "react";
import { Header } from "src/components/organisms/Header";
import { Footer } from "src/components/organisms/Footer";
import styled from "styled-components";

type Props = {
  title: string;
  children: ReactNode;
};

export const Template: FC<Props> = ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TsBodyContainer>
      <Header />
      {children}
      <Footer />
    </TsBodyContainer>
  </>
);

const TsBodyContainer = styled.div`
  min-height: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "a"
    "b"
    "c";
`;
