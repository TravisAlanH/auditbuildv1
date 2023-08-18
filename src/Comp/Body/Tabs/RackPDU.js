import React from "react";

export default function RackPDU({ show, setShow }) {
  return (
    <div className="bg-slate-400">
      {show[2] === 0 ? (
        // Small
        <div>
          <button onClick={() => setShow([0, 0, 1, 0, 0, 0, 0, 0])}>Edit Rack PDU</button>
        </div>
      ) : (
        // Large
        <div>
          <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>Submit Rack PDU</button>
        </div>
      )}
    </div>
  );
}
