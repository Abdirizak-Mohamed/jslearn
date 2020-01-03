import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends Component {
  state = {
    onVisualizeDijkstra: false
  };
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PathFinderrrz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Visualise Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="VisualizeDijkstras"
                onClick={this.props.onVisualizeDijkstra}
              >
                Visualize Dijkstra's Algorithm
              </NavDropdown.Item>{" "}
              {/*onClick={this.props.onVisualizeDijkstra}*/}
              <NavDropdown.Item href="#action/3.2">
                Breadth-First Search
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
