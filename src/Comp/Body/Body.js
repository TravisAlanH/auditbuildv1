import React from "react";

import Location from "./Tabs/Location";
import AisleRow from "./Tabs/AisleRow";
import RackPDU from "./Tabs/RackPDU";
import Cabinets from "./Tabs/Cabinets";

export default function Body() {
  const [show, setShow] = React.useState([1, 0, 0, 0, 0, 0, 0, 0]);
  const [location, setLocation] = React.useState([]);
  const [aisle, setAisle] = React.useState([]);
  const [cabinet, setCabinet] = React.useState([]);

  console.log(aisle);

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
