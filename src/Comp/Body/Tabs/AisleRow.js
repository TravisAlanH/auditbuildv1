import React from "react";
import Steps from "../../../Templates/Templates";
import LabelInput from "../../Reuse/LabelInput";

export default function AisleRow({ location, setLocation, show, setShow }) {
    function SubmitLocation(e) {
        e.preventDefault();
        setLocation([
            e.target[0].value,
            e.target[1].value,
            e.target[2].value,
            e.target[3].value,
            e.target[4].value,
            e.target[5].value,
        ]);
        setShow([0, 0, 1, 0, 0, 0, 0, 0]);
    }

    if (show[1] === 0) {
        return (
            <div>
                <h1>
                    {location[1]} {location[4]}
                </h1>
                <button onClick={() => setShow([0, 1, 0, 0, 0, 0, 0, 0])}>
                    Edit
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <form onSubmit={SubmitLocation}>
                    {Steps.AddAisleAndRow[0].Data.map((item, index) => {
                        let Base = "Set";
                        let Operation = "ADD";
                        let Object = "LOCATION";
                        let value = item;
                        // if (location.length !== 0) value = location[index];
                        if (index === 0 || index === 1) Base = "";
                        if (index === 0) value = Operation;
                        if (index === 1) value = Object;
                        return (
                            <LabelInput
                                Label={item}
                                value={value}
                                Base={Base}
                                key={index}
                            />
                        );
                    })}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
