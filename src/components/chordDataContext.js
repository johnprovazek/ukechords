import React from "react";

// set the defaults
const ChordDataContext = React.createContext({
  chordData: "error",
  setChordData: () => {}
});

export default ChordDataContext;
