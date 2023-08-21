import React from "react";
import Cab from "../../../JSON/Step3";
import { findClosestMatches } from "../../Reuse/Functions";

export default function Cabinets({ cabinet, setCabinet, show, setShow, location, aisle }) {
  const [holdCabinets, setHoldCabinets] = React.useState(cabinet);
  const [cabList, setCabList] = React.useState([]);
  const [aisleList, setAisleList] = React.useState(aisle);

  console.log(aisle);
  console.log(aisleList);

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
        <div className="flex flex-row justify-between">
          <h2>{cabinet[0].Object}</h2>
          <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>Edit Cabinets</button>
        </div>
      ) : (
        // Large
        <div>
          <form>
            {holdCabinets.map((item, index) => {
              let allRows = Object.keys(item);
              let rows = allRows;

              if (!item.open) {
                rows = ["Name"];
              }
              return (
                <div key={index}>
                  {rows.map((key, innerIndex) => {
                    let editButton = (
                      <button
                        key={innerIndex}
                        onClick={(e) => {
                          e.preventDefault();
                          let TempCabinet = [...holdCabinets];
                          TempCabinet[index].open = !TempCabinet[index].open;
                          setHoldCabinets(TempCabinet);
                          setCabinet(TempCabinet);
                        }}
                      >
                        {holdCabinets[index].open ? "Close" : "Open"}
                      </button>
                    );

                    if (key === "Operation" || key === "Object" || key === "open") {
                      return null;
                    } else if (key === "Model") {
                      //MODEL
                      return (
                        <div>
                          <label>{key}: </label>
                          <div className="dropdown">
                            <input
                              type="text"
                              className="dropbtn"
                              value={item[key]}
                              onChange={(e) => {
                                let TempCabinet = [...holdCabinets];
                                TempCabinet[index][key] = e.target.value;
                                setHoldCabinets(TempCabinet);
                                setCabinet(TempCabinet);
                                let holdArrayIndex = findClosestMatches(e.target.value, Cab);
                                setCabList(holdArrayIndex);
                              }}
                            />
                            <div className="dropdown-content">
                              {cabList.map((CabItem, Cabindex) => {
                                return (
                                  <button
                                    key={Cabindex}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      let TempCabinet = [...holdCabinets];
                                      TempCabinet[index]["Model"] = Cab[CabItem].MODEL;
                                      TempCabinet[index]["Make"] = Cab[CabItem].MAKE;
                                      setHoldCabinets(TempCabinet);
                                      setCabinet(TempCabinet);
                                      console.log(cabinet);
                                    }}
                                  >
                                    {Cab[CabItem].MODEL}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    } else if (key === "RowLabel") {
                      // ROW LABEL
                      return (
                        <div>
                          <label>{key}: </label>
                          {/* select dropdown that loops thorugh the aisle array objects and then through the rows array in each object for the options and updates the hold and cabinets  */}
                          <select
                            value={item[key]}
                            onChange={(e) => {
                              let TempCabinet = [...holdCabinets];
                              TempCabinet[index][key] = e.target.value;
                              setHoldCabinets(TempCabinet);
                              setCabinet(TempCabinet);
                            }}
                          >
                            {aisle.map((item, index) => {
                              return item.Rows.map((item, index) => {
                                return (
                                  <option key={index} value={item}>
                                    {item}
                                  </option>
                                );
                              });
                            })}
                          </select>
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
