import React from "react";
import Steps from "../../../Templates/Templates";
import LabelInput from "../../Reuse/LabelInput";

export default function Location({ aisle, setAisle, show, setShow }) {
  const TemplateData = Steps.AddAisleAndRow;
  const [holdAisle, setHoldAisle] = React.useState(aisle);
  console.log(aisle);

  function AddAisle(e) {
    e.preventDefault();
    let ARData = {
      AisleName: "Aisle",
      Rows: new Array(0),
      Location: "",
      Operation: "ADD",
      Object: "SUBLOCATION",
    };
    let TempAisle = [...holdAisle];
    TempAisle.push(ARData);
    setHoldAisle(TempAisle);
  }

  return (
    <div className="bg-slate-300">
      {show[1] === 0 ? (
        // Small
        <div>
          <button onClick={() => setShow([0, 1, 0, 0, 0, 0, 0, 0])}>Edit Aisle and Row</button>
        </div>
      ) : (
        // Large
        <div>
          {holdAisle.map((item, index) => {
            let rowIndex = item.Rows.length + 1;
            return (
              <div key={index}>
                <LabelInput Label={"Aisle Name: "} value={"Aisle" + (index + 1)} />
                {item.Rows.length !== 0 ? (
                  <div className="bg-slate-400">
                    {item.Rows.map((row, RowIndex) => {
                      return (
                        <div key={RowIndex}>
                          {/*  */}
                          <label>Row Name: </label>
                          <input
                            type="text"
                            value={row}
                            onChange={(e) => {
                              let TempRow = [...holdAisle];
                              TempRow[index].Rows[RowIndex] = e.target.value;
                              setHoldAisle(TempRow);
                              setAisle(TempRow);
                            }}
                          />
                          {/*  */}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    item.Rows.push("A" + (index + 1) + "R" + rowIndex);
                    rowIndex = item.Rows.length + 1;
                    setHoldAisle([...holdAisle]);
                  }}
                >
                  Add Row
                </button>
              </div>
            );
          })}
          <input type="hidden" value="END" />
          <div className="flex flex-col">
            <button onClick={AddAisle}>Add Aisle</button>
            <button onClick={() => setShow([0, 0, 1, 0, 0, 0, 0, 0])}> Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
