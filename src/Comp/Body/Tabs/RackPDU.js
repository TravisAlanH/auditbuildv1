// import React from "react";

// export default function RackPDU({ show, setShow }) {
//   return (
//     <div className="bg-slate-400">
//       {show[2] === 0 ? (
//         // Small
//         <div>
//           <button onClick={() => setShow([0, 0, 1, 0, 0, 0, 0, 0])}>Edit Rack PDU</button>
//         </div>
//       ) : (
//         // Large
//         <div>
//           <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>Submit Rack PDU</button>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import Cab from "../../../JSON/Step3";
import { findClosestMatches } from "../../Reuse/Functions";

export default function RackPDU({
    RackPDU,
    setRackPDU,
    show,
    setShow,
    location,
    aisle,
}) {
    const [holdRackPDUs, setHoldRackPDUs] = React.useState(RackPDU);
    const [cabList, setCabList] = React.useState([]);

    function Add(e) {
        e.preventDefault();
        let CAData = {
            Operation: "ADD",
            Object: "RackPDU",
            Name: "",
            Make: "",
            Model: "",
            Location: "",
            RowLabel: "",
            PositionInRow: "",
            open: false,
        };
        let TempAisle = [...holdRackPDUs];
        TempAisle.push(CAData);
        setHoldRackPDUs(TempAisle);
    }

    return (
        <div className="bg-slate-500">
            {show[3] === 0 ? (
                // Small
                <div>
                    <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>
                        Edit RackPDUs
                    </button>
                </div>
            ) : (
                // Large
                <div>
                    <form>
                        {holdRackPDUs.map((item, index) => {
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
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    let TempRackPDU = [
                                                        ...holdRackPDUs,
                                                    ];
                                                    TempRackPDU[index].open =
                                                        !TempRackPDU[index]
                                                            .open;
                                                    setHoldRackPDUs(
                                                        TempRackPDU
                                                    );
                                                    setRackPDU(TempRackPDU);
                                                }}
                                            >
                                                {holdRackPDUs[index].open
                                                    ? "Close"
                                                    : "Open"}
                                            </button>
                                        );

                                        if (
                                            key === "Operation" ||
                                            key === "Object" ||
                                            key === "open"
                                        ) {
                                            return null;
                                        } else if (key === "Model") {
                                            //MODEL input
                                            return (
                                                <div>
                                                    <label>{key}: </label>
                                                    <div class="dropdown">
                                                        <input
                                                            type="text"
                                                            className="dropbtn"
                                                            value={item[key]}
                                                            onChange={(e) => {
                                                                let TempRackPDU =
                                                                    [
                                                                        ...holdRackPDUs,
                                                                    ];
                                                                TempRackPDU[
                                                                    index
                                                                ][key] =
                                                                    e.target.value;
                                                                setHoldRackPDUs(
                                                                    TempRackPDU
                                                                );
                                                                setRackPDU(
                                                                    TempRackPDU
                                                                );
                                                                let holdArrayIndex =
                                                                    findClosestMatches(
                                                                        e.target
                                                                            .value,
                                                                        Cab
                                                                    );
                                                                setCabList(
                                                                    holdArrayIndex
                                                                );
                                                            }}
                                                        />
                                                        <div class="dropdown-content">
                                                            {cabList.map(
                                                                (
                                                                    CabItem,
                                                                    Cabindex
                                                                ) => {
                                                                    return (
                                                                        <button
                                                                            key={
                                                                                Cabindex
                                                                            }
                                                                            onClick={(
                                                                                e
                                                                            ) => {
                                                                                e.preventDefault();
                                                                                let TempRackPDU =
                                                                                    [
                                                                                        ...holdRackPDUs,
                                                                                    ];
                                                                                TempRackPDU[
                                                                                    index
                                                                                ][
                                                                                    "Model"
                                                                                ] =
                                                                                    Cab[
                                                                                        CabItem
                                                                                    ].MODEL;
                                                                                TempRackPDU[
                                                                                    index
                                                                                ][
                                                                                    "Make"
                                                                                ] =
                                                                                    Cab[
                                                                                        CabItem
                                                                                    ].MAKE;
                                                                                setHoldRackPDUs(
                                                                                    TempRackPDU
                                                                                );
                                                                                setRackPDU(
                                                                                    TempRackPDU
                                                                                );
                                                                                console.log(
                                                                                    RackPDU
                                                                                );
                                                                            }}
                                                                        >
                                                                            {
                                                                                Cab[
                                                                                    CabItem
                                                                                ]
                                                                                    .MODEL
                                                                            }
                                                                        </button>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        } else if (key === "RowLabel") {
                                            // ROW LABEL
                                            return (
                                                <div>
                                                    <label>{key}: </label>
                                                    {/* select dropdown that loops thorugh the aisle array objects and then through the rows array in each object for the options and updates the hold and RackPDUs  */}
                                                    <select
                                                        value={item[key]}
                                                        onChange={(e) => {
                                                            let TempRackPDU = [
                                                                ...holdRackPDUs,
                                                            ];
                                                            TempRackPDU[index][
                                                                key
                                                            ] = e.target.value;
                                                            setHoldRackPDUs(
                                                                TempRackPDU
                                                            );
                                                            setRackPDU(
                                                                TempRackPDU
                                                            );
                                                        }}
                                                    >
                                                        {aisle.map(
                                                            (item, index) => {
                                                                return item.Rows.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <option
                                                                                key={
                                                                                    index
                                                                                }
                                                                                value={
                                                                                    item
                                                                                }
                                                                            >
                                                                                {
                                                                                    item
                                                                                }
                                                                            </option>
                                                                        );
                                                                    }
                                                                );
                                                            }
                                                        )}
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
                                                            let TempRackPDU = [
                                                                ...holdRackPDUs,
                                                            ];
                                                            TempRackPDU[index][
                                                                key
                                                            ] = e.target.value;
                                                            setHoldRackPDUs(
                                                                TempRackPDU
                                                            );
                                                            setRackPDU(
                                                                TempRackPDU
                                                            );
                                                        }}
                                                    />
                                                    {/* shows the button only on the Name key for edit */}
                                                    {key === "Name"
                                                        ? editButton
                                                        : null}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            );
                        })}
                    </form>
                    <button onClick={Add}>Add RU</button>
                    <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>
                        Submit RackPDUs
                    </button>
                </div>
            )}
        </div>
    );
}
