import React from "react";
import Room from "./Room";

export default function Tables({ location, setLocation }) {
  let data = [
    ["RoomNum", "FType"],
    ["RoomNum", "FType"],
    ["RoomNum", "FType"],
  ];
  console.log(location);
  const array = [<Room location={location} setLocation={setLocation} />, <Room location={location} setLocation={setLocation} />, <Room location={location} setLocation={setLocation} />];
  return (
    <div className="flex flex-row justify-center items-center pt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 lg:gap-8 md:gap-8">
        {array.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[20rem] h-[7rem] rounded-md bg-slate-300"
              id="myBtn"
              onClick={() => {
                let modal = document.getElementById("modal" + index);
                modal.style.display = "block";
                let close = document.getElementById("close" + index);
                close.onclick = function () {
                  modal.style.display = "none";
                };
                window.onclick = function (event) {
                  if (event.target === modal) {
                    modal.style.display = "none";
                  } else if (event.target === close) {
                    modal.style.display = "none";
                  }
                };
              }}
            >
              {/* DATA IN BLOCK */}
              <div className="flex flex-col w-full h-full">
                <div className="flex flex-row w-full justify-start items-center gap-4 h-[3rem]">
                  <div className="flex flex-row justify-center items-center w-[3rem] h-[3rem] rounded-full">
                    <p>L</p>
                  </div>
                  <p>Name</p>
                </div>
                <div className="px-4">
                  <div>
                    <p className="text-sm">Actions</p>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                      {data[index].map((item, index) => {
                        return location[item] === "" ? <p key={index}>{item}</p> : "";
                      })}
                    </div>
                    <div>E</div>
                  </div>
                </div>
              </div>

              {/* <div className="flex flex-col justify-center items-start w-full h-full p-2">
                <p>Missing</p>
                
              </div> */}
              {/* MODAL */}
              <div className="modal" id={"modal" + index}>
                <div className="modal-content">
                  <span className="close" id={"close" + index}>
                    &times;
                  </span>
                  {item}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
