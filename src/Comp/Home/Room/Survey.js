import React from "react";
// import Room from "./Room";
import Tables from "./Tables";

export default function Survey({ location, setLocation }) {
  return (
    <div>
      {/* <Room location={location} setLocation={setLocation} /> */}
      <Tables location={location} setLocation={setLocation} />
    </div>
  );
}
