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
  const visitedNodesInOrder = testDepthFirstSearch(grid, startNode, finishNode);
  animateDepthFirst(visitedNodesInOrder);
  animateShortestPath(visitedNodesInOrder[1]);
}

function animateDepthFirst(visitedNodesInOrder) {
  console.log(visitedNodesInOrder[0]);
  console.log(visitedNodesInOrder[1].length);
  for (let i = 0; i < visitedNodesInOrder[0].length - 1; i++) {
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

function testDepthFirstSearch(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const actualPath = [];
  const nodesInPath = [];
  let seenNodes = new Set();
  visitedNodesInOrder.push(startNode);
  console.log("a", visitedNodesInOrder.length);

  while (visitedNodesInOrder.length) {
    console.log("1", visitedNodesInOrder.length);

    var currentNode = visitedNodesInOrder.pop();
    nodesInPath.push(currentNode);

    if (!seenNodes.has(currentNode)) {
      seenNodes.add(currentNode);
      if (currentNode === finishNode) {
        return [nodesInPath, visitedNodesInOrder];
      }
    }

    let neighbours = getUnvisitedNeighbors(currentNode, grid);
    for (const neighbour of neighbours) {
      if (neighbour) {
        if (!seenNodes.has(neighbour)) {
          visitedNodesInOrder.push(neighbour);
        }
      }
    }
    console.log("2", visitedNodesInOrder.length);
  }
  return [nodesInPath, visitedNodesInOrder];
}

/*function testDepthFirstSearchHelper(currentNode,
  finishNode,
  visitedNodesInOrder,
  grid,
  nodesInPath){


}*/

function depthFirstSearch(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const nodesInPath = [];

  let currentNode = startNode;

  /* for (let node of grid){
    if (!node.isVisited){
      depthFirstSearchHelper(
        currentNode,
        finishNode,
        visitedNodesInOrder,
        grid,
        nodesInPath
      );
    }
  }*/

  let answer = depthFirstSearchHelper(
    currentNode,
    finishNode,
    visitedNodesInOrder,
    grid,
    nodesInPath
  );
  console.log(answer);
  return answer;
}

function depthFirstSearchHelper(
  currentNode,
  finishNode,
  visitedNodesInOrder,
  grid,
  nodesInPath
) {
  console.log(currentNode.col, currentNode.row);
  let neighbours = getUnvisitedNeighbors(currentNode, grid);
  //console.log(neighbours);
  visitedNodesInOrder.push(currentNode);
  currentNode.isVisited = true;

  //console.log(neighbours.length);
  for (const neighbour of neighbours) {
    if (neighbour.isFinish) {
      nodesInPath = visitedNodesInOrder;
      return [visitedNodesInOrder, nodesInPath];
    }
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
