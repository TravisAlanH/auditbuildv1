import React from "react";
import LabelInput from "../Reuse/LabelInput";
import Steps from "../../Templates/Templates";
import Location from "./Tabs/Location";
import AisleRow from "./Tabs/AisleRow";

export default function Body() {
    const [show, setShow] = React.useState([1, 0, 0, 0, 0, 0, 0, 0]);
    const [location, setLocation] = React.useState([]);
    const [aisle, setAisle] = React.useState([]);

    return (
        <div>
            <Location
                location={location}
                setLocation={setLocation}
                show={show}
                setShow={setShow}
            />

            <AisleRow
                aisle={aisle}
                setAisle={setAisle}
                show={show}
                setShow={setShow}
            />
        </div>
    );

    // return (
    //     <div>
    //         <LabelInput Label={"Location"} value={"Set Location"} />
    //     </div>
    // );
}
