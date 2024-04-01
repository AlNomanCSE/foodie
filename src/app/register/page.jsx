import ResgisterForm from "@/components/ResgisterForm";
import React from "react";

const RegisterPage = () => {
  return (
    <section
      style={{
        maxWidth: "1350px",
        margin: "0 auto",
        minHeight: "calc(100vh - 139.5938px)",
        backgroundColor: "#F7F6BB",
        borderInline: ".2px solid rgb(206, 206, 206)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResgisterForm />
    </section>
  );
};

export default RegisterPage;
