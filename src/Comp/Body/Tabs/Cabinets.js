import React from "react";

export default function Cabinets({ show, setShow }) {
  //   if (show[3] === 0) {
  //     return (
  //       <div>
  //         <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>Edit Cabinets</button>
  //       </div>
  //     );
  //   } else {
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
          <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>Submit Cabinets</button>
        </div>
      )}
    </div>
  );
  //}
}
