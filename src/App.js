import "./App.css";
import Layout from "./Comp/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Audit from "./Comp/Audit/Audit";
import Room from "./Comp/Home/Room/Room";
import Assets from "./Comp/Home/Assets/Assets";
import Nav from "./Comp/Nav/Nav";
import React from "react";

function App() {
  const [location, setLocation] = React.useState([]);
  const [show, setShow] = React.useState([1, 0, 0, 0, 0, 0, 0, 0]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Layout show={show} setShow={setShow} location={location} setLocation={setLocation} />} />
          <Route path="/audit" element={<Audit location={location} setLocation={setLocation} show={show} setShow={setShow} />} />
          <Route path="/room" element={<Room location={location} setLocation={setLocation} />} />
          <Route path="/assets" element={<Assets location={location} setLocation={setLocation} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
