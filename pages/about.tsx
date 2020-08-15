import React from "react";
import * as Page from "../components/Page/Page";
import Head from "next/head";
import styles from "./about.module.scss";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

interface Props {}

function About(props: Props) {
  const {} = props;

  return (
    <Page.Wrapper>
      <Head key="about">
        <title>Aaron Hodges - About</title>
      </Head>
      <Page.Content>
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <h1>About Aaron</h1>
            <h3>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia
            </h3>
            <div className={styles.contentGrid}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed
                do eiusmod tempor incididunt ut labore et dolore roipi magna
                aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in tufpoy voluptate velit esse
                cillum dolore eu fugiat nulla parieratur. Excepteur sint. Duis
                aute irure dolor in reprehenderit in tufpoy voluptate velit esse
                cillum dolore eu fugiat nulla parieratur. Excepteur sint.
              </p>
              <p>
                Culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptartem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi ropeior architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className={styles.rightContainer}>
            <picture>
              <source srcSet="about.webp" type="image/webp" />
              <img src="about.jpg" alt="author" className={styles.portrait} />
            </picture>
            <div className={styles.linksGrid}>
              <Link href="">
                <a className={styles.link}>
                  <FaFacebookF />
                </a>
              </Link>
              <Link href="">
                <a className={styles.link}>
                  <FaTwitter />
                </a>
              </Link>
              <Link href="">
                <a className={styles.link}>
                  <FaInstagram />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Page.Content>
    </Page.Wrapper>
  );
}

export default About;
