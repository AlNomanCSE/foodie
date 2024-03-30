import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/layout/logo.png"
          width={0}
          height={0}
          alt="logo"
          sizes="100vw"
          className={styles.log}
          priority
        />
      </Link>
      <nav>
        <p>
          <Link href="/menu">Menu</Link>
        </p>
        <p>Dashboard</p>
        <button>Sign up</button>
      </nav>
    </header>
  );
};

export default Header;
