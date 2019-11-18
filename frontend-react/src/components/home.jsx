import React, { Component } from "react";

class Home extends Component {
  prints = () => {
    console.log(localStorage.getItem("isAuth"));
  };
  state = {};
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <button onClick={this.prints} className="btn-warning btn-sm ma-2">
          print
        </button>
      </div>
    );
  }
}

export default Home;
