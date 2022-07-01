import React from "react";
import Header from "../header/Header";
import SideNav from "../sideNav/SideNav";
import TopNav from "../topNav/TopNav";
import TopSection from "../topSection/TopSection";
import "./studentMgmt.scss";
import {Outlet,Routes,Route} from 'react-router-dom';
import GeneralInfo from "../generalInfo/GeneralInfo";
const StudentMgmt = () => {
  return (
    <div className="std-mgmt">
      {/* <SideNav /> */}
      <div className="main">
        {/* <TopNav /> */}
        <TopSection />

        <div className="body">
        <Header/>
         
          <Outlet/>
                  </div>
      </div>
    </div>
  );
};

export default StudentMgmt;
