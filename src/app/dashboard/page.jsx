import React from "react";
import styles from "./dashboard.module.css";
import UserDashboard from "@/components/UserDashboard";
const page = () => {
  return (
    <section className={styles.section}>
      <UserDashboard />
    </section>
  );
};

export default page;
