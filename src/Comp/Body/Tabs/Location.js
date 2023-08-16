import React from "react";
import Steps from "../../../Templates/Templates";
import LabelInput from "../../Reuse/LabelInput";

export default function Location({ location, setLocation, show, setShow }) {
    const TemplateData = Steps.AddLocation;
    function SubmitLocation(e) {
        e.preventDefault();
        // CHANGE THIS TO APPEND TO THE ARRAY
        setLocation((location) => [
            ...location,
            {
                Operation: "ADD",
                Object: "LOCATION",
                dcTrackLocationCode: e.target[0].value,
                dcTrackLocationName: e.target[1].value,
                DataCenterArea: e.target[2].value,
                Country: e.target[3].value,
            },
        ]);

        setShow([0, 1, 0, 0, 0, 0, 0, 0]);
    }

    if (show[0] === 0) {
        return (
            <div>
                <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>
                    Edit Location
                </button>
            </div>
        );
    } else {
        return (
            <div>
                <div>
                    <h3>{TemplateData.Object}</h3>
                </div>
                <form onSubmit={SubmitLocation}>
                    {TemplateData.Data.map((step, index) => {
                        return <LabelInput key={index} Label={step} />;
                    })}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
