import React from "react";
import Room from "./Room";

export default function Tables({ location, setLocation }) {
  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-row justify-center items-center pt-4">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:gap-8 md:gap-8">
        {array.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[10rem] h-[7rem] rounded-md bg-slate-300"
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
              <div className="modal" id={"modal" + index}>
                <div className="modal-content">
                  <span className="close" id={"close" + index}>
                    &times;
                  </span>
                  <Room location={location} setLocation={setLocation} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
