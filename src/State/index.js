import React, { Component } from "react";

export default class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false,
      username: "Vũ",
    };
  }

  renderHTML = () => {
    return this.state.isLogin ? (
      <p>Hello {this.state.username}</p>
    ) : (
      <button className="btn btn-success" onClick={this.LoginOnclick}>
        Login
      </button>
    );
  };
  LoginOnclick = () => {
    this.setState({
      isLogin: true,
    });
  };
  //Khi nào hàm render() chạy lại ? Khi state thay đổi thì hàm render sẽ chạy lại
  render() {
    return (
      <div>
        <h3 className="title">* State</h3>
        {this.renderHTML()}
      </div>
    );
  }
}
