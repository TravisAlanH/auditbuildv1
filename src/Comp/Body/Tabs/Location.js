import React from "react";
import Steps from "../../../Templates/Templates";
import LabelInput from "../../Reuse/LabelInput";

export default function Location({ location, setLocation, show, setShow }) {
    function SubmitLocation(e) {
        e.preventDefault();
        // CHANGE THIS TO APPEND TO THE ARRAY
        setLocation({
            Operation: e.target[0].value,
            Object: e.target[1].value,
            dcTrackLocationCode: e.target[2].value,
            dcTrackLocationName: e.target[3].value,
            DataCenterArea: e.target[4].value,
            Country: e.target[5].value,
        });
        setShow([0, 1, 0, 0, 0, 0, 0, 0]);
    }

    if (show[0] === 0) {
        return (
            <div>
                <h1>
                    {location.dcTrackLocationCode} {location.DataCenterArea}
                </h1>
                <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>
                    Edit
                </button>
            </div>
        );
    } else {
        console.log(location);
        return (
            <div>
                <form onSubmit={SubmitLocation}>
                    {Steps.AddLocation[0].Data.map((item, index) => {
                        let Base = "Set";
                        let Operation = "ADD";
                        let Object = "LOCATION";
                        let value = "";
                        if (location.length !== 0) {
                            let key = item.replace(/\s/g, "");
                            value = location[key];
                        }
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
