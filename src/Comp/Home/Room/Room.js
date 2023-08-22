import React from "react";
// import LabelInput from "../../Reuse/LabelInput";

export default function Room({ location, setLocation }) {
  const [gps, setGPS] = React.useState("GPS Location");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
  }

  function showPosition(position) {
    setGPS(position.coords.latitude + ", " + position.coords.longitude);
  }

  console.log(location);
  return (
    <div className="p-4">
      <div className="flex flex-row justify-center">{location.Name}</div>
      <div className="flex flex-col justify-between">
        <label className="text-sm">Room / ATG Number: </label>
        <div className="flex flex-row justify-end">
          <input type="text" defaultValue={""} name="RMNum" className="w-3/4 border-4" />
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <label className="text-sm">GPS Locatoin: </label>
        <div className="flex flex-row justify-end">
          <button type="text" className="w-3/4 border-4 text-sm" onClick={getLocation}>
            {gps}
          </button>
        </div>
      </div>
    </div>
  );
}
