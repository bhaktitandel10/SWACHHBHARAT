// import Dashboard from "./Dashboard/Dashboard";

import { Outlet } from "react-router-dom";
import Navbar from "./Dashboard/Navbar";
import Sidebar from "./Dashboard/Sidebar";
import "./Layout.css";
const Layout = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
