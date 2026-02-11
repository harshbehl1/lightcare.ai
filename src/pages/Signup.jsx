import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Dashboard from "./Dashboard";  
import { setToken } from "../utils/authStorage";

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

const googleButtonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "14px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#F9FAFB",
  fontWeight: 500,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  marginTop: "12px",
  transition: "all 0.2s ease",
};

const dividerStyle = {
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
  color: "#9CA3AF",
  fontSize: "12px",
  gap: "10px",
};

const lineStyle = {
  flex: 1,
  height: "1px",
  background: "rgba(255,255,255,0.1)",
};

export default function Signup({ onClose, onSwitchToLogin }) {
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
    setToken("mock_token");

    navigate("/dashboard");
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

        <button type="submit" style={buttonStyle} >
          Create Account
        </button>
      </form>

      {/* DIVIDER */}
      <div style={dividerStyle}>
        <div style={lineStyle} />
        <span>OR</span>
        <div style={lineStyle} />
      </div>

      {/* GOOGLE SIGNUP */}
      <button style={googleButtonStyle}>
        <svg width="18" height="18" viewBox="0 0 18 18">
          <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z" fill="#4285F4"/>
          <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
          <path d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z" fill="#FBBC05"/>
          <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961l3.007 2.332C4.672 5.164 6.656 3.58 9 3.58z" fill="#EA4335"/>
        </svg>
        Sign up with Google
      </button>

      {/* FOOTER */}
      <p style={{ marginTop: "16px", fontSize: "14px" }}>
        Already have an account?{" "}
        <span
          onClick={onSwitchToLogin}
          style={{
            color: "#14B8A6",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Login
        </span>
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
