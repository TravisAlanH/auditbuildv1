// Noted are only Required fields

// Step 1
const AddLocation = {
    Object: "LOCATION",
    Data: [
        "dcTrack Location Code",
        "dcTrack Location Name",
        "Data Center Area",
        "Country",
    ],
};

// Step 2
const AddAisleAndRow = {
    Object: "SUBLOCATION",
    Data: ["Sub Location Name", "Location", "Sub Location Type"],
};

//Step 3
const AddCabinets = {
    Object: "CABINET",
    Data: ["Name", "Make", "Model", "Location", "Row Label", "Position in Row"],
};

// Step 4
const AddRackPDU = {
    Object: "RACK-PDU-ZERO U",
    Data: [
        "# Operation",
        "Object",
        "Name",
        "Make",
        "Model",
        "Location",
        "Cabinet",
        "Cabinet Side",
        "U Position",
    ],
};

// Step 5
const AddDevices = {
    Object: "DEVICE-RACKABLE",
    Data: [
        "# Operation",
        "Object",
        "Name",
        "Make",
        "Model",
        "Location",
        "Cabinet",
        "U Position",
        "Rails Used",
        "Orientation",
    ],
};

// Step 6
const CreatePowerConnections = {
    Object: "POWER-CONNECTION",
    Data: [
        "# Operation",
        "Object",
        "Starting Item Location",
        "Starting Port Name",
        "Ending Item Location",
        "Ending Item Name",
        "Ending Port Name",
    ],
};
// Step 7
const StructuredCabling = {
    Object: "STRUCTURED-CABLING",
    Data: [
        "# Operation",
        "Object",
        "Starting Item Location",
        "Starting Item Name",
        "Starting Port Name",
        "Starting Port Connector",
        "Cable Grade",
        "Media",
        "Length (ft/m)",
        "Ending Item Location",
        "Ending Item Name",
        "Ending Port Name",
        "Ending Port Connector",
    ],
};

// Step 8
const CreateDataConnections = {
    Object: "DATA-CONNECTION",
    Data: [
        "# Operation",
        "Object",
        "Starting Item Location",
        "Starting Item Name",
        "Starting Port Name",
        "Ending Item Location",
        "Ending Item Name",
        "Ending Port Name",
    ],
};

export default {
    AddLocation,
    AddAisleAndRow,
    AddCabinets,
    AddRackPDU,
    AddDevices,
    CreatePowerConnections,
    StructuredCabling,
    CreateDataConnections,
};
