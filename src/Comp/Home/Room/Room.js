import React from "react";
// import LabelInput from "../../Reuse/LabelInput";

export default function Room({ location, setLocation }) {
  const [gps, setGPS] = React.useState("GPS Location");
  const [waterNoteView, setWaterNoteView] = React.useState(false);
  // const [waterNote, setWaterNote] = React.useState("");

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

      {/* Room Number */}
      <div className="flex flex-col justify-between">
        <label className="text-sm">Room / ATG Number: </label>
        <div className="flex flex-row justify-end">
          <input type="text" defaultValue={""} name="Num" className="w-3/4 border-4" />
        </div>
      </div>

      {/* GPS Location */}
      <div className="flex flex-col justify-between">
        <label className="text-sm">GPS Location: </label>
        <div className="flex flex-row justify-end">
          <button type="text" className="w-3/4 border-4 text-sm" onClick={getLocation}>
            {gps}
          </button>
        </div>
      </div>

      {/* Area */}
      <div className="flex flex-col justify-between">
        <label className="text-sm">Area </label>
        <div className="flex flex-row justify-end">
          <input type="text" defaultValue={location.Area ? location.Area : ""} name="Area" className="w-3/4 border-4" pattern="[0-9]*" />
        </div>
      </div>

      {/* Floor / Condition */}
      <div className="flex flex-col justify-between">
        <label className="text-sm">Floor </label>
        {/* Type */}
        <div className="flex flex-row justify-end">
          <div className="w-full flex flex-col items-end">
            <div>
              <label className="text-sm">Type: </label>
            </div>
            <select className="w-3/4 border-4" name="FType">
              <option value="">select</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        {/* Condition */}
        <div className="flex flex-row justify-end">
          <div className="w-full flex flex-col items-end">
            <div>
              <label className="text-sm">Condition: </label>
            </div>
            <select className="w-3/4 border-4" name="FCondition">
              <option value="">select</option>

              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
      </div>

      {/* Ceiling Type Condition Water */}
      <div className="flex flex-col justify-between">
        <label className="text-sm">Ceiling </label>
        {/* Type */}
        <div className="flex flex-row justify-end">
          <div className="w-full flex flex-col items-end">
            <div>
              <label className="text-sm">Type: </label>
            </div>
            <select className="w-3/4 border-4" name="CType">
              <option value="">select</option>

              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        {/* Conditio  */}
        <div className="flex flex-row justify-end">
          <div className="w-full flex flex-col items-end">
            <div>
              <label className="text-sm">Condition: </label>
            </div>
            <select className="w-3/4 border-4" name="CCondition">
              <option value="">select</option>

              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-2 pt-2">
          <label className="text-sm">Water Damage:</label>
          <input type="checkbox" className="w-8 border-4" onChange={() => setWaterNoteView(!waterNoteView)} name="WaterDamage" />
        </div>
        {/* {waterNoteView && (
          <div className="flex flex-row justify-end">
            <textarea
              type="text"
              defaultValue={waterNote}
              name="WaterNote"
              className="w-3/4 border-4"
              onChange={() => {
                setWaterNote(document.getElementsByName("WaterNote")[0].value);
              }}
            />
          </div>
        )} */}
      </div>

      {/* END */}
      <div className="flex flex-row justify-between pt-8">
        <button
          className="border-4 w-full"
          onClick={() => {
            setLocation({
              ...location,
              Name: document.getElementsByName("Num")[0].value,
              Area: document.getElementsByName("Area")[0].value,
              FType: document.getElementsByName("FType")[0].value,
              FCondition: document.getElementsByName("FCondition")[0].value,
              CType: document.getElementsByName("CType")[0].value,
              CCondition: document.getElementsByName("CCondition")[0].value,
              WaterDamage: document.getElementsByName("WaterDamage")[0].checked,
              // WaterNote: document.getElementsByName("WaterNote")[0].value,
              GPS: gps,
            });
          }}
        >
          Save
        </button>
        <button className="border-4 w-full">Export</button>
      </div>
    </div>
  );
}
