import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigList from "./PigList";

function App() {
  return (
    <div className="App">
        <Nav />
        <PigList hogs={hogs}/>
    </div>
  );
}

export default App;
