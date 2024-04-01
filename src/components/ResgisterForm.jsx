"use client";

import React, { useState } from "react";
import styles from "./ResgisterForm.module.css";
import Link from "next/link";
const UserInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  async function handleSubmitForm(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are necessery");
    }
    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
      } else {
        console.log("User Registration failed ...");
      }
    } catch (error) {
      console.log("Error during registartion : ", error);
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmitForm}>
      <h2>Registrer</h2>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
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
      <button>Register</button>
      {error && <span>{error}</span>}
      <p>
        <Link href="/login">
          Already have an accout? <strong>Sign In</strong>
        </Link>
      </p>
    </form>
  );
};

export default UserInfo;
