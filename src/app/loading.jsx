"use client";
import React from "react";
import { PacmanLoader } from "react-spinners";
const loading = () => {
  return (
    <div
      style={{
        maxWidth: "1350px",
        margin: "0 auto",
        minHeight: " calc(100vh - 139.5938px) ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F6BB",
      }}
    >
      <PacmanLoader color="#87A922" />
    </div>
  );
};

export default loading;
