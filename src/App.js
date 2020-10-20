import React from 'react';
import './App.css';
import Header from "./cvhome/header";
import Objective from "./cvhome/objective";
import Experience from "./cvhome/Experience";
import Academic from "./cvhome/academic";
import ResponsiveDrawer from "./cvhome/sidenav";
function App() {
  return (
    <div className="App">
        <ResponsiveDrawer></ResponsiveDrawer>
        {/*<Header></Header>*/}
    </div>
  );
}

export default App;
