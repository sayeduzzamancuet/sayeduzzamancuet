import React from 'react';
import './App.css';
import Header from "./cvhome/header";
import Objective from "./cvhome/objective";
import Experience from "./cvhome/Experience";
import Academic from "./cvhome/academic";
function App() {
  return (
    <div className="App">
        <Header></Header>
        <Objective></Objective>
        <Experience></Experience>
        <Academic></Academic>
    </div>
  );
}

export default App;
