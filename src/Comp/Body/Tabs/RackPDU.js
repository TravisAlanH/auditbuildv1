import React from "react";

export default function RackPDU({ show, setShow }) {
  if (show[2] === 0) {
    return (
      <div>
        <button onClick={() => setShow([0, 0, 1, 0, 0, 0, 0, 0])}>Edit Rack PDU</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={() => setShow([0, 0, 0, 1, 0, 0, 0, 0])}>Submit Rack PUD</button>
      </div>
    );
  }
}
