import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

export default function Location({ location, setLocation, show, setShow }) {
  const [holdData, setHoldData] = React.useState({
    Operation: "ADD",
    Object: "LOCATION",
    Code: location.Code ? location.Code : "",
    Name: location.Name ? location.Name : "",
    Area: location.Area ? location.Area : "",
    Country: location.Country ? location.Country : "",
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
          <button onClick={() => setShow([1, 0, 0, 0, 0, 0, 0, 0])} className="rounded-full bg-white w-8 h-8 flex flex-row justify-center items-center">
            <AiOutlineEdit />
          </button>
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
                <div key={index} className="flex flex-row justify-between py-1">
                  <label>{step}: </label>
                  <input
                    className="w-3/4"
                    type="text"
                    value={holdData[step]}
                    onChange={(e) => {
                      let TempData = { ...holdData };
                      TempData[step] = e.target.value;
                      setHoldData(TempData);
                      setLocation(TempData);
                    }}
                  />
                </div>
              );
            })}
            <div className="flex flex-row justify-end">
              <input type="submit" value="Save" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
