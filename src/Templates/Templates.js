// Noted are only Required fields

// Step 1
export const AddLocation = {
  Object: "LOCATION",
  Data: ["dcTrack Location Code", "dcTrack Location Name", "Data Center Area", "Country"],
};

// Step 2
export const AddAisleAndRow = {
  Object: "SUBLOCATION",
  Data: ["Sub Location Name", "Location", "Sub Location Type"],
};

//Step 3
export const AddCabinets = {
  Object: "CABINET",
  Data: ["Name", "Make", "Model", "Location", "Row Label", "Position in Row"],
};

// Step 4
export const AddRackPDU = {
  Object: "RACK-PDU-ZERO U",
  Data: ["# Operation", "Object", "Name", "Make", "Model", "Location", "Cabinet", "Cabinet Side", "U Position"],
};

// Step 5
export const AddDevices = {
  Object: "DEVICE-RACKABLE",
  Data: ["# Operation", "Object", "Name", "Make", "Model", "Location", "Cabinet", "U Position", "Rails Used", "Orientation"],
};

// Step 6
export const CreatePowerConnections = {
  Object: "POWER-CONNECTION",
  Data: ["# Operation", "Object", "Starting Item Location", "Starting Port Name", "Ending Item Location", "Ending Item Name", "Ending Port Name"],
};
// Step 7
export const StructuredCabling = {
  Object: "STRUCTURED-CABLING",
  Data: ["# Operation", "Object", "Starting Item Location", "Starting Item Name", "Starting Port Name", "Starting Port Connector", "Cable Grade", "Media", "Length (ft/m)", "Ending Item Location", "Ending Item Name", "Ending Port Name", "Ending Port Connector"],
};

// Step 8
export const CreateDataConnections = {
  Object: "DATA-CONNECTION",
  Data: ["# Operation", "Object", "Starting Item Location", "Starting Item Name", "Starting Port Name", "Ending Item Location", "Ending Item Name", "Ending Port Name"],
};
