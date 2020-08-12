import React from "react";
import styles from "./Footer.module.scss";
import { FaArrowUp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
// import { useRouter } from "next/router";

function Footer() {
  //   const router = useRouter();

  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.accreditation}>
          <div>
            <p
            //   onClick={() => {
            //     console.log("hi");
            //     router.push("/");
            //   }}
            >
              Aaron Hodges
            </p>
            <p>
              <small>Author</small>
            </p>
          </div>
          <div>
            <p>
              <small>©2020 Aaron Hodges</small>
            </p>
            <p>
              <small>Created by Michael Hodges</small>
            </p>
          </div>
        </div>
        <div className={styles.navLinks}>
          <LinkItem to="/" label="Home" />
          <LinkItem to="/about" label="About" />
          <LinkItem to="/blog" label="Blog" />
          <LinkItem to="/books" label="Books" />
          <LinkItem to="/worlds" label="Worlds" />
        </div>
        <div className={styles.socials}>
          <LinkItem to="" label="Facebook" icon={<FaFacebookF />} external />
          <LinkItem to="" label="Twitter" icon={<FaTwitter />} external />
          <LinkItem to="" label="Instagram" icon={<FaInstagram />} external />
        </div>
        <div className={styles.newsletter}>
          <p>Subscribe to the newsletter</p>
        </div>

        <div className={styles.scrollTop}>
          <button
            className={styles.button}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function LinkItem({
  to,
  label,
  icon,
  external,
}: {
  to: string;
  label: string;
  icon?: JSX.Element;
  external?: boolean;
}) {
  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Link href={to}>
      <a {...externalProps} className={styles.link}>
        {icon} {label}
      </a>
    </Link>
  );
}
