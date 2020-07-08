import React from "react";
import "./App.css";
// import Baitap1 from "./Bai-tap-1";
// import Baitap2 from "./Bai-tap-2";
import RenderingElements from "./rendering-elements";
import HandlingEvent from "./handlingEvent";
import ExampleHandlingEvent from "./handlingEvent/example";
import State from "./State";
import ListKeys from "./List-key";
import BaitapCar from "./Baitap-car";
import BaitapList from "./Baitap-list";

function App() {
  return (
    <div>
      <RenderingElements />
      <hr />
      <HandlingEvent />
      <hr />
      <ExampleHandlingEvent />
      <hr />
      <State />
      <hr />
      <ListKeys />
      <hr />
      <BaitapCar />
      <hr />
      <BaitapList />
    </div>
  );
}

export default App;
