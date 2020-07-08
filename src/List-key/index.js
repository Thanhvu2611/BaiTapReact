import React, { Component } from "react";

export default class ListKeys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [
        { id: 1, name: "IphoneX", price: 100000 },
        { id: 2, name: "Samsung", price: 200000 },
        { id: 3, name: "HTC", price: 300000 },
        { id: 4, name: "Nokia", price: 10000 },
      ],
    };
  }
  renderTable = () => {
    const { listProduct } = this.state;
    return listProduct.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="title">List Keys</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên Sản Phẩm</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody id="tbodyListProduct">{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
