import React, { Component } from "react";

export default class ExampleHandlingEvent extends Component {
  isLogin = false;
  username = "Vũ";

  renderHTML = () => {
    return this.isLogin ? (
      <p>Hello {this.username}</p>
    ) : (
      <button className="btn btn-success" onClick={this.LoginOnclick}>
        Login
      </button>
    );
  };
  LoginOnclick = () => {
    this.isLogin = true;
    this.renderHTML();
  };
  render() {
    return (
      <div>
        <h3 className="title">* ExampleHandlingEvent</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
