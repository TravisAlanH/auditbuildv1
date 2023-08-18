import React from "react";
import Steps from "../../../Templates/Templates";
import LabelInput from "../../Reuse/LabelInput";

/// I NEED TO CLEAN THIS CODE UP
/// REFACTOR

export default function Location({ location, setLocation, show, setShow }) {
  const [holdData, setHoldData] = React.useState({
    Operation: "ADD",
    Object: "LOCATION",
    LocationCode: "",
    LocationName: "",
    Area: "",
    Country: "",
  });

  // const TemplateData = Steps.AddLocation;
  function SubmitLocation(e) {
    e.preventDefault();
    // CHANGE THIS TO APPEND TO THE ARRAY
    setHoldData({
      Operation: "ADD",
      Object: "LOCATION",
      LocationCode: e.target[0].value,
      LocationName: e.target[1].value,
      Area: e.target[2].value,
      Country: e.target[3].value,
    });
    setLocation(holdData);
    setShow([0, 1, 0, 0, 0, 0, 0, 0]);
  }

  return (
    <div className="bg-slate-200">
      {show[0] === 0 ? (
        // Small
        <div>
          <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>Edit Location</button>
        </div>
      ) : (
        // Large
        <div>
          <div>
            <h3>{holdData.Object}</h3>
          </div>
          <form onSubmit={SubmitLocation}>
            {Object.keys(holdData).map((step, index) => {
              if (index < 2) {
                return null;
              }
              return <LabelInput key={index} Label={step + ": "} value={holdData[step]} />;
            })}
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}
