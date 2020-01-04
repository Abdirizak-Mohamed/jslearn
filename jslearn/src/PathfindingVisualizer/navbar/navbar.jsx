import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBar extends Component {
  state = {};
  render() {
    const { onVisualizeDijkstra, onReset } = this.props;
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">PathFinderrrz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={onReset}>Reset</Nav.Link>
            <NavDropdown title="Visualise Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="VisualizeDijkstras"
                onClick={onVisualizeDijkstra}
              >
                Visualize Dijkstra's Algorithm
              </NavDropdown.Item>{" "}
              {/*onClick={this.props.onVisualizeDijkstra}*/}
              <NavDropdown.Item>Breadth-First Search</NavDropdown.Item>
              <NavDropdown.Item>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Reset</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
