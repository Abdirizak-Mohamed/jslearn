import React, { Component } from "react";
import { List, Image, Button, Header } from "semantic-ui-react";
import Logo from "../../images/pathway.png";

class Sidebar extends Component {
  state = {};
  render() {
    const {
      onVisualizeDijkstra,
      onReset,
      onVisualizeDepthFirst,
      onVisualizeBreadthFirst
    } = this.props;
    return (
      <div>
        <Image src={Logo} size={"medium"} centered bordered />
        <Header
          inverted
          as="h2"
          icon="map"
          content="Pathfinding Algorithms"
          style={{ paddingBottom: "0.4cm" }}
        />
        <List divided inverted relaxed>
          <List.Item>
            <List.Content floated="right">
              <Button size={"small"} onClick={onVisualizeDijkstra} inverted>
                Visualize
              </Button>
            </List.Content>
            <List.Content>
              <List.Header>Dijkstra's Algorithm</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button size={"small"} onClick={onVisualizeDepthFirst} inverted>
                Visualize
              </Button>
            </List.Content>
            <List.Content>
              <List.Header>Depth First Search</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content floated="right">
              <Button size={"small"} onClick={onVisualizeBreadthFirst} inverted>
                Visualize
              </Button>
            </List.Content>
            <List.Content>
              <List.Header>Breadth First Search</List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <Button size={"medium"} onClick={onReset} inverted>
                Reset Screen
              </Button>
            </List.Content>
          </List.Item>
        </List>
      </div>
    );
  }
}

export default Sidebar;
