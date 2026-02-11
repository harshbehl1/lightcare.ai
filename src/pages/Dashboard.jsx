import { getToken, removeToken } from "../utils/authStorage";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/header";  
import AISummaryCard from "../components/AISummaryCard";
import SummaryCard from "../components/SummaryCard";
import UploadCard from "../components/UploadCard";
import TimelineCard from "../components/TimelineCard";

export default function Dashboard() {
  const token = getToken();
  const navigate = useNavigate();

  if (!token) {
    return <Navigate to="/login" />;
  }

  // function handleLogout() {
  //   removeToken();
  //   navigate("/login");
  // }

  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "32px 16px"
      }}
    >
      <Header />
      {/* HEADER */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px"
        }}
      >
        <h1 style={{ margin: 0 }}>Medical Memory</h1>
      </div>

      {/* AI HEALTH SUMMARY */}
      <AISummaryCard />

      {/* HUMAN-READABLE SUMMARY */}
      <SummaryCard />

      {/* MEDICAL RECORD UPLOAD */}
      <UploadCard />

      {/* MEDICAL TIMELINE */}
      <section>
        <h2 style={{ marginBottom: "16px" }}>Medical Timeline</h2>

        <TimelineCard
          type="LAB"
          title="HbA1c Test"
          date="01 Dec 2024"
          details="Value: 7.2%"
        />

        <TimelineCard
          type="VISIT"
          title="General Physician Visit"
          date="10 Jan 2025"
          details="Complaint: Fatigue"
        />
      </section>
    </div>
  );
}



