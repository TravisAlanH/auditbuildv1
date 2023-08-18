import React from "react";
import Cab from "../../../JSON/Step3";

export default function Cabinets({ cabinet, setCabinet, show, setShow }) {
  const [holdCabinets, setHoldCabinets] = React.useState(cabinet);

  function AddAisle(e) {
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
            {holdCabinets.map((item, index) => {
              return (
                <div key={index}>
                  {Object.keys(item).map((key, innerIndex) => {
                    if (key === "Operation" || key === "Object") {
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
                        </div>
                      );
                    }
                  })}
                </div>
              );
            })}
          </form>
          <button onClick={AddAisle}>Add Cabinet</button>
          <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>Submit Cabinets</button>
        </div>
      )}
    </div>
  );
}
