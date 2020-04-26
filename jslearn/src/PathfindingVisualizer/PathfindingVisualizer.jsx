import React, { Component } from "react";
import Node from "./Node/Node";

import { Grid } from "semantic-ui-react";
//import { getAllNodes } from "../algorithms/dijkstras";
import { handleVisualizeDijkstra, getAllNodes } from "../algorithms/dijkstras";
import { handleDepthFirstSearch } from "../algorithms/depthfirst";
import { handleBreadthFirstSearch } from "../algorithms/breadthfirst";

import "./PathfindingVisualizer.css";
import Sidebar from "./sidebar/sidebar";

const START_NODE_ROW = 12;
const START_NODE_COL = 12;
const FINISH_NODE_ROW = 12;
const FINISH_NODE_COL = 32;

export default class PathfindingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      mouseIsPressed: false
    };
  }

  componentDidMount() {
    const grid = getInitialGrid();
    this.setState({ grid });
  }

  handleMouseDown(row, col) {
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid, mouseIsPressed: true });
  }

  handleMouseEnter(row, col) {
    if (!this.state.mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(this.state.grid, row, col);
    this.setState({ grid: newGrid });
  }

  handleMouseUp() {
    this.setState({ mouseIsPressed: false });
  }

  handleReset = () => {
    const newGrid = getInitialGrid();
    const nodes = getAllNodes(newGrid);

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.isStart) {
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-start";
      } else if (node.isFinish) {
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node node-finish";
      } else {
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "node";
      }
    }

    this.setState({ grid: newGrid });
  };

  render() {
    const { grid, mouseIsPressed } = this.state;

    return (
      <>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column
              width={1}
              style={{
                backgroundColor: "rgb(40, 40, 40)",
                height: "100vh",
                borderRight: "5px solid black",
                overflow: "auto",
                flexGrow: "1",
                paddingLeft: "3.5vw",
                minWidth: "2cm"
              }}
            >
              <Sidebar
                onVisualizeDijkstra={() =>
                  handleVisualizeDijkstra(
                    grid,
                    START_NODE_ROW,
                    START_NODE_COL,
                    FINISH_NODE_ROW,
                    FINISH_NODE_COL
                  )
                }
                onReset={() => this.handleReset()}
                onVisualizeDepthFirst={() =>
                  handleDepthFirstSearch(
                    grid,
                    START_NODE_ROW,
                    START_NODE_COL,
                    FINISH_NODE_ROW,
                    FINISH_NODE_COL
                  )
                }
                onVisualizeBreadthFirst={() =>
                  handleBreadthFirstSearch(
                    grid,
                    START_NODE_ROW,
                    START_NODE_COL,
                    FINISH_NODE_ROW,
                    FINISH_NODE_COL
                  )
                }
              />
            </Grid.Column>
            <Grid.Column width={13}>
              <div className="maze">
                {grid.map((row, rowIdx) => {
                  return (
                    <div key={rowIdx}>
                      {row.map((node, nodeIdx) => {
                        const { row, col, isFinish, isStart, isWall } = node;
                        return (
                          <Node
                            ref={this.isVisiteds}
                            key={nodeIdx}
                            col={col}
                            isFinish={isFinish}
                            isStart={isStart}
                            isWall={isWall}
                            mouseIsPressed={mouseIsPressed}
                            onMouseDown={(row, col) =>
                              this.handleMouseDown(row, col)
                            }
                            onMouseEnter={(row, col) =>
                              this.handleMouseEnter(row, col)
                            }
                            onMouseUp={() => this.handleMouseUp()}
                            row={row}
                          ></Node>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

const getInitialGrid = () => {
  const grid = [];
  for (let row = 0; row < 25; row++) {
    const currentRow = [];
    for (let col = 0; col < 44; col++) {
      currentRow.push(createNode(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};
const createNode = (col, row) => {
  return {
    col,
    row,
    isStart: row === START_NODE_ROW && col === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null
  };
};
const getNewGridWithWallToggled = (grid, row, col) => {
  const newGrid = grid.slice();
  const node = newGrid[row][col];
  const newNode = {
    ...node,
    isWall: !node.isWall
  };
  newGrid[row][col] = newNode;
  return newGrid;
};
