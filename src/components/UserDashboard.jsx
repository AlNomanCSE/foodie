"use client";
import { useSession } from "next-auth/react";
import React from "react";
import styles from "./UserDashboard.module.css";
const UserDashboard = () => {
  const { data: session } = useSession();
  return (
    <div className={styles.mainDiv}>
      <div>
        <div>
          <button>All order</button>
          <button>Active orders</button>
          <button>Pending orders</button>
        </div>
        <div>
          <h3>Welcome back {session?.user?.name}!</h3>
          <p>Email: {session?.user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
