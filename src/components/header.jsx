import { getToken, removeToken } from "../utils/authStorage";
import { useNavigate } from "react-router-dom";

import "../styles/header.css";

const Header = () => {
    const token = getToken();
    const navigate = useNavigate();

    function handleLogout() {
        removeToken();
        navigate("/login");
    }
    return (
        <div className="header-container">
            {/* Logo Section */}
            <div className="header-left">
                <h1 className="header-logo">LightCare.AI</h1>
                <ul className="header-nav">
                    <li>Today</li>
                    <li>Insights</li>
                    <li className="active">Profile</li>
                    <li>Biomarkers</li>
                    <li>Records</li>
                    <li>Sources</li>
                </ul>
            </div>

            {/* Right Side Actions */}
            <div className="header-actions">
                 <button className="header-btn">Share Profile</button>
                 <div className="header-divider"></div>
                 <button 
                    onClick={handleLogout}
                    className="header-btn header-logout-btn"
                >
                    <span>Logout</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="header-icon">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Header