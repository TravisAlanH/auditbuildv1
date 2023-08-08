// Noted are only Required fields

// Step 1
const AddLocation = [
    {
        Object: "LOCATION",
        Data: [
            "Operation",
            "Object",
            "dcTrack Location Code",
            "dcTrack Location Name",
            "Data Center Area",
            "Country",
        ],
    },
];

// Step 2
const AddAisleAndRow = [
    {
        Object: "SUBLOCATION",
        Data: [
            "# Operation",
            "Object",
            "Sub Location Name",
            "Location",
            "Sub Location Type",
        ],
    },
];

//Step 3
const AddCabinets = [
    {
        Object: "CABINET",
        Data: [
            "# Operation",
            "Object",
            "Name",
            "Make",
            "Model",
            "Location",
            "Row Label",
            "Position in Row",
        ],
    },
    {
        Object: "AC-BAY",
        Data: [
            "# Operation",
            "Object",
            "Name",
            "Make",
            "Model",
            "Location",
            "Row Label",
            "Position in Row",
        ],
    },
    {
        Object: "PLANT-BAY",
        Data: [
            "# Operation",
            "Object",
            "Name",
            "Make",
            "Model",
            "Location",
            "Row Label",
            "Position in Row",
        ],
    },
    {
        Object: "DC-BAY",
        Data: [
            "# Operation",
            "Object",
            "Name",
            "Make",
            "Model",
            "Location",
            "Row Label",
            "Position in Row",
        ],
    },
];

// Step 4
const AddRackPDU = [
    {
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
    },
    {
        Object: "FAP-RACKABLE",
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
    },
    {
        Object: "INVERTER-RACKABLE",
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
    },
];

// Step 5
const AddDevices = [
    {
        Object: "DEVICE-BLADE CHASSIS-RACKABLE",
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
    },
    {
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
    },
    {
        Object: "NETWORK-RACKABLE",
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
    },
    {
        Object: "DATA PANEL-RACKABLE",
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
    },
    {
        Object: "PASSIVE",
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
    },
    {
        Object: "DEVICE-BLADE",
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
    },
    {
        Object: "DEVICE-VM",
        Data: ["# Operation", "Object", "Name", "Model", "Location"],
    },
];

// Step 6
const CreatePowerConnections = [
    {
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
    },
];

// Step 7
const StructuredCabling = [
    {
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
    },
];

// Step 8
const CreateDataConnections = [
    {
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
    },
];

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
