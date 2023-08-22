import "./App.css";
import Layout from "./Comp/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Audit from "./Comp/Audit/Audit";
import Room from "./Comp/Home/Room/Room";
import Assets from "./Comp/Home/Assets/Assets";
import Nav from "./Comp/Nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/room" element={<Room />} />
          <Route path="/assets" element={<Assets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
