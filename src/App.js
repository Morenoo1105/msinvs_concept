import React from "react";

import {
  Footer,
  Proyectos,
  Crowdlending,
  NoPFP,
  ComoFunciona,
  PorqueMSI,
  Header,
} from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="gradient__bg">
        <Header />
      </div>
      <PorqueMSI />
      <Crowdlending />
      <Proyectos />
      <NoPFP />
      <ComoFunciona />
      <Footer />
    </div>
  );
};

export default App;
