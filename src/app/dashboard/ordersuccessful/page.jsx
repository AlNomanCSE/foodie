import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        minHeight: " calc(100vh - 139.5938px) ",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F6BB",
      }}
    >
      <h2>
        <strong>Payment Successful ...!!</strong>
      </h2>
      <Link href="/" style={{ color: "green" }}>
        <h3>Return Home</h3>
      </Link>
    </div>
  );
};

export default page;
