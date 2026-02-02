import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "14px",
  borderRadius: "12px",
  border: "none",
  outline: "none",
  fontSize: "14px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  borderRadius: "14px",
  border: "none",
  background: "#14B8A6",
  color: "#022C22",
  fontWeight: 600,
  cursor: "pointer",
};

export default function Signup({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    // MOCK SIGNUP SUCCESS
    console.log("User registered:", email);

    navigate("/login");
  }

  return (
    <div
      style={{
        width: "360px",
        padding: "36px",
        borderRadius: "18px",

        background: "rgba(255,255,255,0.18)",
        backdropFilter: "blur(18px)",

        boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
        color: "#F9FAFB",
        textAlign: "center",
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ marginBottom: "6px" }}>Sign Up</h2>
        <p style={{ fontSize: "14px", color: "#CBD5E1" }}>
          Create your account
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Create Account
        </button>
      </form>

      {/* FOOTER */}
      <p style={{ marginTop: "16px", fontSize: "14px" }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>

      <button
        onClick={onClose}
        style={{
          marginTop: "18px",
          background: "none",
          border: "none",
          color: "#9CA3AF",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        Close
      </button>
    </div>
  );
}
