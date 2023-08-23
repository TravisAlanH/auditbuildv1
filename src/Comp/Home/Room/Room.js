import React from "react";
// import LabelInput from "../../Reuse/LabelInput";

export default function Room({ location, setLocation }) {
  const [gps, setGPS] = React.useState("GPS Location");
  const [waterNoteView, setWaterNoteView] = React.useState(false);
  const [saved, setSaved] = React.useState(true);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
    }
  }

  function ExportFormatData() {
    return {
      "# Operation *": location.Operation,
      "Object *": location.Object,
      "dcTrack Location Code*": location.Code,
      "dcTrack Location Name*": location.Name,
      "dcTrack Location Hierarchy*": "",
      "dcTrack Location Parent*": "",
      "Can Contain Assets": "",
      "Data Center Area*": location.Area,
      "Country*": location.Country,
      "Enable AC Virtual Power Chain": "",
      "Is Default Location": "",
      "Capacity(kW)": "",
      "Room Number": location.RoomNum,
      "Floor Type": location.FType,
      "Floor Condition": location.FCondition,
      "Ceiling Type": location.CType,
      "Ceiling Condition": location.CCondition,
      "Water Damage": location.WaterDamage,
      // "Water Damage Note": location.WaterNote,
      "GPS Location": location.GPS,
    };
  }

  function showPosition(position) {
    setGPS(position.coords.latitude + ", " + position.coords.longitude);
  }

  function createTable(objectData) {
    const table = document.getElementById("tableId");
    const tableHeader = table.createTHead();
    const headerRow = tableHeader.insertRow();

    for (const key in objectData) {
      if (key !== "Object") {
        const th = document.createElement("th");
        th.textContent = key;
        headerRow.appendChild(th);
      }
    }

    const tableBody = table.createTBody();
    const bodyRow = tableBody.insertRow();

    for (const key in objectData) {
      if (key !== "Object") {
        const td = document.createElement("td");
        td.textContent = objectData[key];
        bodyRow.appendChild(td);
      }
    }

    return table;
  }

  function download_to_excel(e) {
    var tab_text = "<table><tr>";
    // var textRange = "";
    var j = 0;
    var tab = document.getElementById("tableId");
    for (j = 0; j < tab.rows.length; j++) {
      tab_text += tab.rows[j].innerHTML + "</tr>";
    }
    tab_text += "</table>";
    var a = document.createElement("a");
    var data_type = "data:application/vnd.ms-excel";
    a.href = data_type + ", " + encodeURIComponent(tab_text);
    a.download = location.Name + "_Survey.xls";
    a.click();
    e.preventDefault();
  }

  return (
    <div className="p-4">
      <div className="flex flex-row justify-center">{location.Name ? location.Name : ""}</div>

      {/* Room Number */}
      <div className="flex flex-row justify-around">
        <label className="text-sm">Room / ATG Number: </label>
        {/* <div className="flex flex-row justify-end"> */}
        <input type="text" defaultValue={location.RoomNum ? location.RoomNum : ""} name="Num" className="w-1/2 border-4" />
        {/* </div> */}
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
            <input type="text" defaultValue={location.FType ? location.FType : ""} className="w-3/4 border-4" name="FType" />
          </div>
        </div>
        {/* Condition */}
        <div className="flex flex-row justify-end">
          <div className="w-full flex flex-col items-end">
            <div>
              <label className="text-sm">Condition: </label>
            </div>
            <select className="w-3/4 border-4" name="FCondition" defaultValue={location.FCondition || ""}>
              <option value="">select</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
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
            <input type="text" className="w-3/4 border-4" name="CType" defaultValue={location.CType ? location.CType : ""} />
          </div>
        </div>
        {/* Conditio  */}
        <div className="flex flex-row justify-end">
          <div className="w-full flex flex-col items-end">
            <div>
              <label className="text-sm">Condition: </label>
            </div>
            <select className="w-3/4 border-4" name="CCondition" defaultValue={location.CCondition || ""}>
              <option value="">select</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
              <option value="Poor">Poor</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row justify-end gap-2 pt-2">
          <label className="text-sm">Water Damage:</label>
          <input type="checkbox" className="w-8 border-4" onChange={() => setWaterNoteView(!waterNoteView)} name="WaterDamage" defaultValue={location.WaterDamage ? location.WaterDamage : ""} />
        </div>
        {waterNoteView && (
          <div className="flex flex-row justify-end">
            <textarea type="text" defaultValue={location.WaterNote ? location.WaterNote : ""} name="WaterNote" className="w-3/4 border-4" />
          </div>
        )}
      </div>

      {/* END */}
      <div className="flex flex-row justify-between pt-8">
        <button
          className="border-4 w-full"
          onClick={() => {
            setLocation({
              ...location,
              RoomNum: document.getElementsByName("Num")[0].value,
              Area: document.getElementsByName("Area")[0].value,
              FType: document.getElementsByName("FType")[0].value,
              FCondition: document.getElementsByName("FCondition")[0].value,
              CType: document.getElementsByName("CType")[0].value,
              CCondition: document.getElementsByName("CCondition")[0].value,
              WaterDamage: document.getElementsByName("WaterDamage")[0].checked,
              // WaterNote: document.getElementsByName("WaterNote")[0].value,
              GPS: gps,
            });
            console.log(location);
            setSaved(false);
          }}
        >
          Save
        </button>
        <button
          id="btnExport"
          disabled={saved}
          className="border-4 w-full"
          onClick={(e) => {
            console.log(location);
            let tableElement = createTable(ExportFormatData());
            document.getElementById("holdTable").appendChild(tableElement);
            download_to_excel(e);
          }}
        >
          Export
        </button>
      </div>
      <div className="hidden" id="holdTable">
        <table id="tableId" className="border-4"></table>
      </div>
    </div>
  );
}
