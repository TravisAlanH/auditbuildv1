import React from "react";

export default function LabelInput({ Label, value }) {
  return (
    <div className="flex flex-row justify-between">
      <label>{Label}</label>
      <input type="text" defaultValue={value} name={Label} className="w-3/4" />
    </div>
  );
}
