import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
class NavBar extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const {
      onVisualizeDijkstra,
      onReset,
      onVisualizeDepthFirst,
      onVisualizeBreadthFirst
    } = this.props;
    return (
      <Navbar
        style={{
          backgroundColor: "#ffcc80",
          font: "bold",
          borderRadius: "0px 0px 25px 25px"
        }}
      >
        <Navbar.Brand href="#home">PathFinderrrz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link onClick={onReset}>Reset</Nav.Link>
            <NavDropdown title="Visualise Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item
                className="VisualizeDijkstras"
                onClick={onVisualizeDijkstra}
              >
                Visualize Dijkstra's Algorithm
              </NavDropdown.Item>{" "}
              <NavDropdown.Item onClick={onVisualizeDepthFirst}>
                Depth First Search
              </NavDropdown.Item>
              <NavDropdown.Item onClick={onVisualizeBreadthFirst}>
                Breadth First Search
              </NavDropdown.Item>
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
