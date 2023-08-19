import React from "react";
import Cab from "../../../JSON/Step3";
import { findClosestMatches } from "../../Reuse/Functions";

export default function Cabinets({ cabinet, setCabinet, show, setShow }) {
  const [holdCabinets, setHoldCabinets] = React.useState(cabinet);
  const [cabList, setCabList] = React.useState([]);

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
                    } else if (key === "Model") {
                      // input does a fuzzy seach on the Cab array and presents the best 8 matches to the user to select from and updates the holdCabinets array make and model
                      return (
                        <div key={innerIndex}>
                          <label>{key}</label>

                          <input
                            type="text"
                            value={item[key]}
                            onChange={(e) => {
                              let TempCabinet = [...holdCabinets];
                              TempCabinet[index][key] = e.target.value;
                              setHoldCabinets(TempCabinet);
                              setCabinet(TempCabinet);
                              let holdArrayIndex = findClosestMatches(e.target.value, Cab);
                              setCabList(holdArrayIndex);
                            }}
                            list="cab"
                          />

                          <datalist id="cab">
                            {cabList.map((item, index) => {
                              return <option key={index} value={Cab[item].MODEL} />;
                            })}
                          </datalist>

                          {/* shows the button only on the Name key for edit */}
                        </div>
                      );
                    } else {
                      return (
                        <div key={innerIndex}>
                          <label>{key}</label>
                          <input
                            type="text"
                            value={item[key]}
                            onChange={(e) => {
                              let TempCabinet = [...holdCabinets];
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
