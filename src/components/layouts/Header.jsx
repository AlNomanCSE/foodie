"use client";
import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const Header = () => {
  const { data: session } = useSession();

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
        {session?.user ? (
          <p>
            <Link href="/dashboard">Dashboard</Link>
          </p>
        ) : (
          ""
        )}

        {session?.user ? (
          <button onClick={() => signOut()}>Log Out</button>
        ) : (
          <button>
            <Link href="/login">Log In</Link>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
