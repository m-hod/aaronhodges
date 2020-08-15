import Head from "next/head";
import styles from "./index.module.scss";
import classnames from "classnames";
import * as Page from "../components/Page/Page";

export default function Home() {
  return (
    <Page.Wrapper>
      <Head key="home">
        <title>Aaron Hodges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page.Content>
        <div>hi</div>
      </Page.Content>
    </Page.Wrapper>
  );
}
