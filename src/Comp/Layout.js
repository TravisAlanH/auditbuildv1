import React from "react";
// import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";
import Location from "./Audit/Tabs/Location";

// import Foot from "./Foot/Foot";

export default function Layout({ show, setShow, location, setLocation }) {
  return (
    <div>
      <div className="bg-slate-200">
        <Location show={show} setShow={setShow} location={location} setLocation={setLocation} />
      </div>
      <Outlet />
      {/* <Foot /> */}
    </div>
  );
}
