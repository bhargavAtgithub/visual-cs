import React from "react";
// import logo from "./assets/logo/logo.svg";
import "./App.css";

// first load page
// import FirstLoad from "./pages/first_load.component";
// home page
import HomePage from "./pages/homepage.component";

function App() {
  return (
    <div className="App">
      {/* <img src={logo} alt="logo" className="logo"></img> */}
      {/* <FirstLoad></FirstLoad> */}
      <HomePage />
    </div>
  );
}

export default App;
