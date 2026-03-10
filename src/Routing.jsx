import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

const Routing = () => {
  const [stateData, setstateData] = useState([]);
  const [langData, setLangData] = useState([]);
  const [pledgeData, setpledgeData] = useState([]);

  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Login />} />

        {/* <Route path="/Dashboard" exact element={<Dashboard />} /> */}
        <Route element={<Layout />}>
          {/* <Route path="/Dashboard" exact element={<Dashboard />} /> */}
          <Route path="/Dashboard" />

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
              <EditStateList
                stateData={stateData}
                setstateData={setstateData}
              />
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
              <Pledgelist
                pledgeData={pledgeData}
                setpledgeData={setpledgeData}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
