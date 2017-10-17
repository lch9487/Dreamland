import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span> Menu
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              LIU CHIH-HOU
            </a>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a className="page-scroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="page-scroll" href="#services">
                  Services
                </a>
              </li>

              <li className="dropdown">
                <a className="page-scroll" href="#portfolio">
                  Portfolio
                </a>

                <div className="dropdown-content">
                  <a href="FloppingCards.html">FloppingCards</a> <a>Link 2</a>{" "}
                  <a>Link 3</a>
                </div>
              </li>

              <li>
                <a className="page-scroll" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
