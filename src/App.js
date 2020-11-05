import React from "react";
import "./App.css";
import HeaderContainer from "./containers/header/header-container";

import WilderContainer from './containers/wilder-container/wilders-container';

function App() {

  return (
    <div className="App">
      <HeaderContainer />
      <WilderContainer />
      
    </div>
  );
}

export default App;
