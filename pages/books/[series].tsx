import React from "react";
import { useRouter } from "next/router";
import * as Page from "../../components/Page/Page";
import Head from "next/head";
import styles from "./[series].module.scss";

interface Props {}

function Series(props: Props) {
  const router = useRouter();
  const { series } = router.query;
  console.log(series);

  return (
    <Page.Wrapper>
      <Head key={`books/${series}`}>
        <title>Aaron Hodges - Books - {series}</title>
      </Head>
      <article>
        <div
          style={{
            backgroundImage:
              "url(cover.webp), url(cover.png), url(cover.jpg), url(https://www.aaronhodges.co.nz/wp-content/uploads/2019/03/Copy-of-Copy-of-Copy-of-Copy-of-Read-Now.png)",
          }}
          className={styles.cover}
        >
          <div className={styles.coverContent}>
            <div>
              <h1>The Knights of Alana</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id vehicula enim.
              </h3>
            </div>
            <div></div>
          </div>
        </div>
      </article>
      <Page.Content>
        <div>hi</div>
      </Page.Content>
    </Page.Wrapper>
  );
}

export default Series;
