import React, { useEffect } from "react";
import Room from "./Room";

export default function Survey({ location, setLocation }) {
  return (
    <div className="h-full">
      <div className="overflow-clip bottom-[-65%] fixed RoomTrans" id="Room">
        <Room location={location} setLocation={setLocation} />
      </div>
    </div>
  );
}
