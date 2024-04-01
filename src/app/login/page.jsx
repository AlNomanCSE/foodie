import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Register</button>
        <p>
          <Link href="/register">
            Don't have an accout? <strong>Register</strong>
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
