import React from "react";

export default function Location({ location, setLocation, show, setShow }) {
  const [holdData, setHoldData] = React.useState({
    Operation: "ADD",
    Object: "LOCATION",
    Code: "",
    Name: "",
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
      Code: e.target[0].value,
      Name: e.target[1].value,
      Area: e.target[2].value,
      Country: e.target[3].value,
    });
    setLocation(holdData);
    setShow([0, 1, 0, 0, 0, 0, 0, 0]);
  }

  return (
    <div>
      {show[0] === 0 ? (
        // Small
        <div className="flex flex-row justify-between">
          <h2>LOCATION</h2>
          <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])}>Edit Location</button>
        </div>
      ) : (
        // Large
        <div>
          <div>
            <h3>LOCATION</h3>
          </div>
          <form onSubmit={SubmitLocation}>
            {Object.keys(holdData).map((step, index) => {
              if (index < 2) {
                return null;
              }
              return (
                <div key={index} className="flex flex-row justify-between">
                  <label>{step}: </label>
                  <input
                    className="w-3/4"
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
