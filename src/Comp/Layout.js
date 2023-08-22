import React from "react";
// import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

// import Foot from "./Foot/Foot";

export default function Layout() {
  return (
    <div>
      <>{/* <Nav /> */}</>
      <Outlet />
      {/* <Foot /> */}
    </div>
  );
}
