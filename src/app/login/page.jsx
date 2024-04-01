import React from "react";
import styles from "./login.module.css";
import Link from "next/link";
const LoginPage = () => {
  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <h2>Login</h2>
        <div>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
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
