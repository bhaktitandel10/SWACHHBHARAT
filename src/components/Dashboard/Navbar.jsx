import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    // <div>
      <div className="navbar">
        <h3>SwachhBharat</h3>

        <div className="nav-right">
          <ul>
            <li>Dashboard</li>
            <li>User</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    
  );
}

export default Navbar;
