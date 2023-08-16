import React from "react";

export default function LabelInput({ Label, value }) {
    return (
        <div>
            <label>{Label}</label>
            <input type="text" defaultValue={value} name={Label} />
        </div>
    );
}
