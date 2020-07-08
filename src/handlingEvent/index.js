import React, { Component } from "react";

export default class HandlingEvent extends Component {
  handleOnclick = () => {
    console.log("Hello");
  };
  handleParamsOnclick = (name) => {
    console.log("Hello " + name);
  };
  render() {
    return (
      <div>
        <h3 className="title">Handling Event</h3>
        <button className="btn btn-success" onClick={this.handleOnclick}>
          Handling Event
        </button>
        <br />
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            this.handleParamsOnclick("Vũ");
          }}
        >
          Handling Params
        </button>
      </div>
    );
  }
}
