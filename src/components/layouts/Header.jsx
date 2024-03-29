import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/images/layout/logo.png"
        width={0}
        height={0}
        alt="logo"
        sizes="100vw"
        className={styles.log}
      />
      <nav>
        <p>Menu</p>
        <p>Dashboard</p>
        <button>Sign up</button>
      </nav>
    </header>
  );
};

export default Header;
