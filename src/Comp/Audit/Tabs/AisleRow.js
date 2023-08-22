import React from "react";
import LabelInput from "../../Reuse/LabelInput";
import { AiOutlineEdit } from "react-icons/ai";

export default function Location({ aisle, setAisle, show, setShow }) {
  const [holdAisle, setHoldAisle] = React.useState(aisle);

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
    <div>
      {show[1] === 0 ? (
        // Small
        <div className="flex flex-row justify-between">
          <h2>{aisle.length > 0 ? aisle[0].Object : "Aisle"}</h2>
          <button onClick={() => setShow([0, 1, 0, 0, 0, 0, 0, 0])} className="rounded-full bg-white w-8 h-8 flex flex-row justify-center items-center">
            <AiOutlineEdit />
          </button>
        </div>
      ) : (
        // Large
        <div>
          <div>
            <h3>SUBLOCATION</h3>
          </div>
          {holdAisle.map((item, index) => {
            let rowIndex = item.Rows.length + 1;
            return (
              <div key={index} className="flex flex-col">
                <LabelInput Label={"Aisle: "} value={"Aisle" + (index + 1)} />
                {item.Rows.length !== 0 ? (
                  <div className="bg-slate-400">
                    {item.Rows.map((row, RowIndex) => {
                      return (
                        <div key={RowIndex} className="flex flex-row justify-between">
                          {/*  */}
                          <label>Row: </label>
                          <input
                            className="w-3/4"
                            type="text"
                            value={row}
                            onChange={(e) => {
                              let TempRow = [...holdAisle];
                              TempRow[index].Rows[RowIndex] = e.target.value;
                              setHoldAisle(TempRow);
                              console.log(holdAisle);
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
                    setAisle([...holdAisle]);
                  }}
                >
                  Add Row
                </button>
              </div>
            );
          })}
          <input type="hidden" value="END" />
          <div className="flex flex-row justify-between">
            <button onClick={AddAisle}>Add Aisle</button>
            <button onClick={() => setShow([0, 0, 1, 0, 0, 0, 0, 0])}> Save</button>
          </div>
        </div>
      )}
    </div>
  );
}
