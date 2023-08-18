import React from "react";
import Steps from "../../../Templates/Templates";
import LabelInput from "../../Reuse/LabelInput";

export default function Location({ aisle, setAisle, show, setShow }) {
  const TemplateData = Steps.AddAisleAndRow;
  const [holdAisle, setHoldAisle] = React.useState(aisle);

  function Build(e) {
    e.preventDefault();
    let holdIndex = 0;
    let rowIndex = 0;

    for (let i = 0; i < e.target.length; i++) {
      if (e.target[i].value === "END") {
        break;
      } else if (i === 0 || e.target[i - 1].value === "") {
        holdAisle[holdIndex].AisleName = e.target[i].value;
        continue;
      } else if (e.target[i].value !== "" && e.target[i].value !== "END") {
        holdAisle[holdIndex].Rows[rowIndex] = e.target[i].value;
        rowIndex++;
        continue;
      } else if (e.target[i].value === "") {
        holdIndex++;
        rowIndex = 0;
        continue;
      }
    }
    setHoldAisle(holdAisle);
    setAisle(holdAisle);
    setShow([0, 0, 1, 0, 0, 0, 0, 0]);
  }

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
          <form onSubmit={Build}>
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
                            <LabelInput Label={"Row Name: "} value={row} />
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
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
