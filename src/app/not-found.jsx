import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        minHeight: " calc(100vh - 139.5938px) ",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F7F6BB",
        textAlign: "center",
      }}
    >
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/" style={{ color: "green" }}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
