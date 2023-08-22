import React from "react";
// import LabelInput from "../../Reuse/LabelInput";

export default function Room({ location, setLocation }) {
  console.log(location);
  return (
    <div>
      <div className="flex flex-row justify-center">{location.Name}</div>
      <div className="flex flex-col justify-between">
        <label className="text-sm">Room / ATG Number</label>
        <input type="text" defaultValue={""} name="RMNum" className="w-3/4" />
      </div>
    </div>
  );
}
