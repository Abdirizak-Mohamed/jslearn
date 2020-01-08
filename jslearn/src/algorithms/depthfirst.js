import { animateShortestPath } from "./dijkstras";

export function handleDepthFirstSearch(
  grid,
  START_NODE_ROW,
  START_NODE_COL,
  FINISH_NODE_ROW,
  FINISH_NODE_COL
) {
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = depthFirstSearch(grid, startNode, finishNode);
  animateDepthFirst(visitedNodesInOrder);
}

function animateDepthFirst(visitedNodesInOrder) {
  console.log(visitedNodesInOrder[0].length);
  console.log(visitedNodesInOrder[1].length);
  for (let i = 0; i < visitedNodesInOrder[0].length; i++) {
    /*if (i === visitedNodesInOrder[0].length && visitedNodesInOrder[1]) {
      setTimeout(() => {
        animateShortestPath(visitedNodesInOrder[1]);
      }, 10 * i);
      //return;
    }*/
    //console.log(visitedNodesInOrder[0]);
    setTimeout(() => {
      const node = visitedNodesInOrder[0][i];
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "node node-visited";
    }, 10 * i);
  }
}

function depthFirstSearch(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const nodesInPath = [];

  let currentNode = startNode;
  return depthFirstSearchHelper(
    currentNode,
    finishNode,
    visitedNodesInOrder,
    grid,
    nodesInPath
  );
}

function depthFirstSearchHelper(
  currentNode,
  finishNode,
  visitedNodesInOrder,
  grid,
  nodesInPath
) {
  let neighbours = getUnvisitedNeighbors(currentNode, grid);
  visitedNodesInOrder.push(currentNode);
  nodesInPath.push(currentNode);
  currentNode.isVisited = true;

  if (currentNode === finishNode) {
    return [visitedNodesInOrder, nodesInPath];
  }
  if (neighbours.length === null) {
    nodesInPath.pop(currentNode);
  }
  for (const neighbour of neighbours) {
    depthFirstSearchHelper(
      neighbour,
      finishNode,
      visitedNodesInOrder,
      grid,
      nodesInPath
    );
  }
  return [visitedNodesInOrder, nodesInPath];
}

export function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited && !neighbor.isWall);
}
