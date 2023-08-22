import React from "react";

import Location from "./Tabs/Location";
import AisleRow from "./Tabs/AisleRow";
import RackPDU from "./Tabs/RackPDU";
import Cabinets from "./Tabs/Cabinets";

export default function Audit({ location, setLocation, show, setShow }) {
  const [aisle, setAisle] = React.useState([]);
  const [cabinet, setCabinet] = React.useState([]);

  return (
    <div>
      <div className="py-2 px-2 bg-slate-200">
        <Location location={location} setLocation={setLocation} show={show} setShow={setShow} />
      </div>
      <div className="py-2 px-2 bg-slate-300">
        <AisleRow aisle={aisle} setAisle={setAisle} show={show} setShow={setShow} />
      </div>
      <div className="py-2 px-2 bg-slate-400">
        <Cabinets show={show} setShow={setShow} cabinet={cabinet} setCabinet={setCabinet} aisle={aisle} location={location} />
      </div>
      <div className="py-2 px-2 bg-slate-500">
        <RackPDU show={show} setShow={setShow} />
      </div>
    </div>
  );

  // return (
  //     <div>
  //         <LabelInput Label={"Location"} value={"Set Location"} />
  //     </div>
  // );
}
