import React, { Component } from "react";
import "../style/background.css";

export default class Background extends Component {
  render() {
    return (
      <div className="bg">
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading">Welcome To My Island!</h1>
            <br />
            <p>You will find love and peace in my island.</p>
            <a href="#about" className="btn btn-primary btn-xl page-scroll">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
