import React from "react";
import LabelInput from "../../Reuse/LabelInput";

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
      DataCenterArea: e.target[2].value,
      Country: e.target[3].value,
    });
    setLocation(holdData);
    setShow([0, 1, 0, 0, 0, 0, 0, 0]);
  }

  return (
    <div className="bg-slate-200">
      {show[0] === 0 ? (
        // Small
        <div className="flex flex-row justify-between">
          <h2>{location.LocationName}</h2>
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
              return (
                <div key={index}>
                  <label>{step}: </label>
                  <input
                    type="text"
                    value={holdData[step]}
                    onChange={(e) => {
                      let TempData = { ...holdData };
                      TempData[step] = e.target.value;
                      setHoldData(TempData);
                    }}
                  />
                </div>
              );
            })}
            <input type="submit" value="Submit" />
          </form>
        </div>
      )}
    </div>
  );
}
