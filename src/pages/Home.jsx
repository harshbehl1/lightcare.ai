import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function Home() {
  // const navigate = useNavigate();
  const [showlogin, setShowLogin] = useState(false);
  const [showsignup, setShowSignup] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, sans-serif",
        backgroundImage: "url('/heart.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* DARK OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(6,18,28,0.75) 0%, rgba(6,18,28,0.85) 100%)",
          zIndex: 0,
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* HEADER */}
        <header
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px 32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ fontWeight: 700, color: "#E5E7EB" }}>
            LightCare<span style={{ color: "#2DD4BF" }}>.ai</span>
          </h2>
          

          <div style={{ display: "flex", gap: "16px" }}>
            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                color: "#E5E7EB",
              }}
            >
              Patient Login
            </button>

            <button
              onClick={() => setShowSignup(true)}
              style={{
                background: "#14B8A6",
                color: "#022C22",
                border: "none",
                padding: "10px 18px",
                borderRadius: "8px",
                fontSize: "14px",
                cursor: "pointer",
                boxShadow: "0 8px 24px rgba(20,184,166,0.45)",
              }}
            >
              Sign Up
            </button>
          </div>
        </header>

        {/* HERO */}
        <main
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            padding: "140px 24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#F9FAFB",
              marginBottom: "20px",
            }}
          >
            Your health, beautifully remembered.
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#CBD5E1",
              maxWidth: "640px",
              margin: "0 auto 52px",
              lineHeight: 1.65,
            }}
          >
            LightCare securely transforms your medical history into a calm,
            intelligent health memory — available exactly when it matters.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "18px" }}>
            <button
              onClick={() => setShowSignup(true)}
              style={{
                background: "#14B8A6",
                color: "#022C22",
                border: "none",
                padding: "16px 36px",
                borderRadius: "14px",
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 12px 36px rgba(20,184,166,0.5)",
              }}
            >
              Get Started
            </button>

            <button
              onClick={() => setShowLogin(true)}
              style={{
                background: "transparent",
                color: "#F9FAFB",
                border: "1px solid rgba(255,255,255,0.35)",
                padding: "16px 36px",
                borderRadius: "14px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Patient Login
            </button>
          </div>
        </main>
        {/* signup slide panel */}
        <div
          onClick={() => setShowSignup(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            background: "rgba(6,18,28,0.95)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: showsignup ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            zIndex: 2,
          }}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Signup 
              onClose={() => setShowSignup(false)} 
              onSwitchToLogin={() => {
                setShowSignup(false);
                setShowLogin(true);
              }}
            />  
          </div>
        </div>
        {/* LOGIN SLIDE PANEL */}
          <div
            onClick={() => setShowLogin(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(6,18,28,0.95)",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              transform: showlogin ? "translateY(0)" : "translateY(-100%)",
              transition: "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)",

              zIndex: 3,
            }}
          >
             {/* LOGIN CARD */}
              <div onClick={(e) => e.stopPropagation()}>
                <Login 
                  onClose={() => setShowLogin(false)} 
                  onSwitchToSignup={() => {
                    setShowLogin(false);
                    setShowSignup(true);
                  }}
                />
              </div>
          </div>
      </div>
    </div>
  );
}



