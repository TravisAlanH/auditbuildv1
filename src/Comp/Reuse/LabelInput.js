import React from "react";

export default function LabelInput({ Label, value, Base }) {
    if (Base !== "") {
        return (
            <div>
                <label>{Label}</label>
                <input
                    type="text"
                    placeholder={value}
                    name={Label}
                    defaultValue={value}
                />
            </div>
        );
    } else {
        return (
            <div>
                <label>{Label}</label>
                <input type="text" value={value} name={Label} readOnly={true} />
            </div>
        );
    }
}
