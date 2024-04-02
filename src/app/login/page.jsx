"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  async function handleSubmitForm(e) {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid Crediantials");
        return;
      }
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={handleSubmitForm}>
        <h2>Login</h2>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Log In</button>
        {error && <span>{error}</span>}
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
