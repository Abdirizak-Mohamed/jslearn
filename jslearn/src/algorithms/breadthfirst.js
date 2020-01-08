import { getUnvisitedNeighbors } from "./depthfirst";

export function handleBreadthFirstSearch(
  grid,
  START_NODE_ROW,
  START_NODE_COL,
  FINISH_NODE_ROW,
  FINISH_NODE_COL
) {
  const startNode = grid[START_NODE_ROW][START_NODE_COL];
  const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
  const visitedNodesInOrder = breadthFirstSearch(grid, startNode, finishNode);
  animateBreadthFirst(visitedNodesInOrder);
}

function animateBreadthFirst(visitedNodesInOrder) {
  for (let i = 0; i < visitedNodesInOrder.length; i++) {
    /*if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          animateShortestPath(nodesInShortestPathOrder);
        }, 10 * i);
        return;
      }*/
    setTimeout(() => {
      const node = visitedNodesInOrder[i];
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "node node-visited";
    }, 10 * i);
  }
}

function breadthFirstSearch(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const seenNodes = [];
  let currentNode;

  visitedNodesInOrder.unshift(startNode);
  while (!visitedNodesInOrder.length === null && currentNode !== finishNode) {
    currentNode = visitedNodesInOrder.pop();
    if (!seenNodes.includes(currentNode)) {
      seenNodes.push(currentNode);
      currentNode.isVisited = true;
    }
    let neighbours = getUnvisitedNeighbors(grid, currentNode);
    for (let neighbour of neighbours) {
      visitedNodesInOrder.unshift(neighbour);
      console.log(neighbour);
    }
  }
  return seenNodes;
}
