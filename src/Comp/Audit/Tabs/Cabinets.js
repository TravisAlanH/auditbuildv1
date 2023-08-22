import React from "react";
import Cab from "../../../JSON/Step3";
import { findClosestMatches } from "../../Reuse/Functions";
import { AiOutlineDownCircle, AiOutlineEdit, AiOutlineUpCircle } from "react-icons/ai";

export default function Cabinets({ cabinet, setCabinet, show, setShow, location, aisle }) {
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
      Location: location.Code ? location.Code : "",
      Row: "",
      InRow: "",
      open: false,
    };
    let TempAisle = [...holdCabinets];
    TempAisle.push(CAData);
    setHoldCabinets(TempAisle);
  }

  return (
    <div>
      {show[3] === 0 ? (
        // Small
        <div className="flex flex-row justify-between">
          <h2>{cabinet.length > 0 ? cabinet[0].Object : "Cabinet"}</h2>
          <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])} className="rounded-full bg-white w-8 h-8 flex flex-row justify-center items-center">
            <AiOutlineEdit />
          </button>
        </div>
      ) : (
        // Large
        <div>
          <div>
            <h3>CABINET</h3>
          </div>
          <form className="flex flex-col gap-2">
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
                        {holdCabinets[index].open ? <AiOutlineUpCircle className="text-3xl" /> : <AiOutlineDownCircle className="text-3xl" />}
                      </button>
                    );

                    if (key === "Operation" || key === "Object" || key === "open") {
                      return null;
                    } else if (key === "Model") {
                      //MODEL
                      return (
                        <div key={index} className="flex flex-row justify-between">
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
                    } else if (key === "Row") {
                      // ROW LABEL
                      return (
                        <div key={innerIndex} className="flex flex-row justify-between">
                          <label>{key}: </label>
                          {/* select dropdown that loops thorugh the aisle array objects and then through the rows array in each object for the options and updates the hold and cabinets  */}
                          <select
                            className="w-3/4"
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
                        <div key={innerIndex} className="flex flex-row justify-between">
                          <label>{key}</label>
                          <input
                            className="w-3/4"
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
          <div className="flex flex-row justify-between">
            <button onClick={Add}>Add Cabinet</button>
            <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
