import React from "react";
import './logo.css';

function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle("toggle-sidebar");
    }
    return (
        <div className="d-flex align-items-center justfiy-content-between">
            <a href="/" className="logo d-flex align-items-center">
                <span className="d-lg-block">Dashboard</span>
                {/* d-none */}
            </a>
            <i className="bi bi-list toggle-sidebar-btn" onClick={handleToggleSideBar}></i>
        </div>
    );
}

export default Logo;