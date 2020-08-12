import Head from "next/head";
import styles from "./index.module.scss";
import classnames from "classnames";
import Page from "../components/Page/Page";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Aaron Hodges</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <article className={styles.container}>hi</article> */}
    </Page>
  );
}
