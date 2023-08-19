import React from "react";
import Cab from "../../../JSON/Step3";

export default function Cabinets({ cabinet, setCabinet, show, setShow }) {
  const [holdCabinets, setHoldCabinets] = React.useState(cabinet);
  console.log(cabinet);

  function Add(e) {
    e.preventDefault();
    let CAData = {
      Operation: "ADD",
      Object: "CABINET",
      Name: "",
      Make: "",
      Model: "",
      Location: "",
      RowLabel: "",
      PositionInRow: "",
      open: false,
    };
    let TempAisle = [...holdCabinets];
    TempAisle.push(CAData);
    setHoldCabinets(TempAisle);
  }

  return (
    <div className="bg-slate-500">
      {show[3] === 0 ? (
        // Small
        <div>
          <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>Edit Cabinets</button>
        </div>
      ) : (
        // Large
        <div>
          <form>
            {/* maps the array of cabinets */}
            {holdCabinets.map((item, index) => {
              // sets the keys in index
              let allRows = Object.keys(item);
              let rows = allRows;

              // checks if the row is open for edit
              if (!item.open) {
                rows = ["Name"];
                console.log(rows);
              }
              return (
                <div key={index}>
                  {/* maps the rows (keys in array of objects) in each array */}
                  {rows.map((key, innerIndex) => {
                    // button for the edit
                    let editButton = (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          let TempCabinet = [...holdCabinets];
                          TempCabinet[index].open = !TempCabinet[index].open;
                          setHoldCabinets(TempCabinet);
                          setCabinet(TempCabinet);
                        }}
                      >
                        {/* open or closed based on current mapped object */}
                        {holdCabinets[index].open ? "Close" : "Open"}
                      </button>
                    );

                    if (key === "Operation" || key === "Object" || key === "open") {
                      return null;
                    } else {
                      return (
                        <div key={innerIndex}>
                          <label>{key}</label>
                          <input
                            type="text"
                            value={item[key]}
                            onChange={(e) => {
                              let TempCabinet = [...holdCabinets];
                              console.log(TempCabinet);
                              TempCabinet[index][key] = e.target.value;
                              setHoldCabinets(TempCabinet);
                              setCabinet(TempCabinet);
                            }}
                          />
                          {/* shows the button only on the Name key for edit */}
                          {key === "Name" ? editButton : null}
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </form>
          <button onClick={Add}>Add Cabinet</button>
          <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>Submit Cabinets</button>
        </div>
      )}
    </div>
  );
}
