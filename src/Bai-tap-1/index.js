import React, { Component } from "react";

import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default class Baitap1 extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="BT1_contents">
          <Content />
          <Sidebar />
        </div>

        <Footer />
      </div>
    );
  }
}
