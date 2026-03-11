{
  /*import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
import StateList from "./components/state/Statelist";
import AddState from "./components/state/AddState";
import EditStateList from "./components/state/EditStateList";
import Layout from "./components/Layout";
import LanguageList from "./components/Language/LanguageList";
import AddLanguage from "./components/Language/AddLanguage";
import EditLanguage from "./components/Language/EditLanguage";
import Pledgelist from "./components/TakePledge/Pledgelist";
import { useSelector } from "react-redux";

const Routing = () => {
  const [stateData, setstateData] = useState([]);
  const [langData, setLangData] = useState([]);
  const [pledgeData, setpledgeData] = useState([]);
  const { loginStatus } = useSelector((state) => state.login);
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route element={loginStatus ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/dashboard" element={<h2>Dashboard</h2>} />
        <Route
          path="/Statelist"
          exact
          element={
            <StateList stateData={stateData} setstateData={setstateData} />
          }
        />
        <Route
          path="/AddState"
          exact
          element={
            <AddState stateData={stateData} setstateData={setstateData} />
          }
        />

        <Route
          path="/EditStateList"
          exact
          element={
            <EditStateList stateData={stateData} setstateData={setstateData} />
          }
        />
        <Route
          path="/LanguageList"
          exact
          element={
            <LanguageList langData={langData} setLangData={setLangData} />
          }
        />

        <Route
          path="/AddLanguage"
          exact
          element={
            <AddLanguage langData={langData} setLangData={setLangData} />
          }
        />
        <Route
          path="/EditLanguage"
          exact
          element={
            <EditLanguage langData={langData} setLangData={setLangData} />
          }
        />

        <Route
          path="/Pledgelist"
          exact
          element={
            <Pledgelist pledgeData={pledgeData} setpledgeData={setpledgeData} />
          }
        />
      </Route>
    </Routes>
  );
};

export default Routing;*/
}
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import StateList from "./components/state/Statelist";
import AddState from "./components/state/AddState";
import EditStateList from "./components/state/EditStateList";
import LanguageList from "./components/Language/LanguageList";
import AddLanguage from "./components/Language/AddLanguage";
import EditLanguage from "./components/Language/EditLanguage";
import { useSelector } from "react-redux";

const Routing = () => {

  
  const { user } = useSelector((state) => state.login);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="/login" element={<Login />} />

      <Route element={user ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/dashboard" />
        <Route path="/Statelist" element={<StateList />} />
        <Route path="/AddState" element={<AddState />} />
        <Route path="/EditStateList" element={<EditStateList />} />
        <Route path="/LanguageList" element={<LanguageList />} />
        <Route path="/AddLanguage" element={<AddLanguage />} />
         <Route path="/EditLanguage" element={<EditLanguage />} />
      </Route>
    </Routes>
  );
};

export default Routing;
