import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import StateList from "../state/Statelist";
import LanguageList from "../Language/LanguageList";
import Pledgelist from "../TakePledge/Pledgelist";

function Sidebar() {
  const navigate = useNavigate();
  const handleOnclick = (e) => {
    e.preventDefault();
    navigate("/Statelist");
  };

  const handleOnclickLang = (e) => {
    e.preventDefault();
    navigate("/LanguageList");
  };

  const handleOnclickPledge = (e) => {
    e.preventDefault();
    navigate("/Pledgelist");
  };
  return (
    // <div>
    <div className="sidebar">
      <p className="menu-title">Master</p>
      <ul>
        <li onClick={handleOnclick}>State</li>
        <li onClick={handleOnclickLang}>Language</li>
        <li>Country</li>
        <li>Pages</li>
        <li onClick={handleOnclickPledge}>Take Pledge</li>
      </ul>
    </div>
    // </div>
  );
}

export default Sidebar;
