import React from "react";

export default function Cabinets() {
    if (show[1] === 0) {
        return (
            <div>
                <button onClick={() => setShow([0, 1, 0, 0, 0, 0, 0, 0])}>
                    Edit Aisle and Row
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={() => setShow([0, 0, 0, 0, 0, 0, 0, 0])}>
                    Edit Cabinets
                </button>
            </div>
        );
    }
}
