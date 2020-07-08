import React from "react";
import Itemcard from "./Itemcard";

export default function Listcard() {
  return (
    <div className="container">
      <div className="row">
        <Itemcard />
        <Itemcard />
        <Itemcard />
      </div>
    </div>
  );
}
