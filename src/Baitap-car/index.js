import React, { Component } from "react";

export default class BaitapCar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "./img/imgRedCar.jpg",
    };
  }
  ChangeColor = (color) => {
    let img = "";
    switch (color) {
      case "red":
        img = "./img/imgRedCar.jpg";
        break;
      case "silver":
        img = "./img/imgSilverCar.jpg";
        break;
      default:
        img = "./img/imgBlackCar.jpg";
        break;
    }
    this.setState({
      img,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="title">Bài Tập Car</h3>

        <div className="row">
          <div className="col-sm-6">
            <img className="img-fluid" src={this.state.img} alt="car1"></img>
          </div>
          <div className="col-sm-6">
            <button
              className="btn btn-danger m-3"
              onClick={() => {
                this.ChangeColor("red");
              }}
            >
              Red
            </button>
            <button
              className="btn btn-light m-3"
              onClick={() => {
                this.ChangeColor("silver");
              }}
            >
              Silver
            </button>
            <button
              className="btn btn-dark m-3"
              onClick={() => {
                this.ChangeColor("black");
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}
