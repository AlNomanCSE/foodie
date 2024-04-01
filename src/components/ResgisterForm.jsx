import React from "react";
import styles from "./ResgisterForm.module.css";
import Link from "next/link";
const UserInfo = () => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
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
        <Link href="/login">
          Already have an accout? <strong>Sign In</strong>
        </Link>
      </p>
    </form>
  );
};

export default UserInfo;
