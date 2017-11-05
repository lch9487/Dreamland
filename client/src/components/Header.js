import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Navbar style={{ marginBottom: "0" }} inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="https://rocky-fortress-51379.herokuapp.com/">
              LIU CHIH HOU
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text pullRight>
            <Navbar.Link
              style={{ textDecoration: "none" }}
              href="https://www.cakeresume.com/lch9487"
              target="_blank"
            >
              About
            </Navbar.Link>
          </Navbar.Text>

          <Nav pullRight>
            <NavDropdown
              eventKey={2}
              title="Portfolio"
              noCaret
              id="basic-nav-dropdown"
            >
              <MenuItem
                eventKey={2.1}
                href="https://rocky-fortress-51379.herokuapp.com/youtube"
              >
                Youtube
              </MenuItem>
              <MenuItem
                eventKey={2.2}
                href="https://rocky-fortress-51379.herokuapp.com/weather"
              >
                Weather
              </MenuItem>
              <MenuItem
                eventKey={2.3}
                href="https://protected-dawn-64940.herokuapp.com/"
              >
                Emaily
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
