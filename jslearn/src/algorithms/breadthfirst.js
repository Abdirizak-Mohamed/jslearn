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
  const queue = [];
  const seenNodes = [];

  let currentNode = startNode;
  queue.unshift(startNode);

  while (queue.length) {
    currentNode = queue.pop();

    if (!seenNodes.includes(currentNode)) {
      seenNodes.push(currentNode);
      currentNode.isVisited = true;
    }
    let neighbours = getUnvisitedNeighbors(currentNode, grid);
    for (let neighbour of neighbours) {
      queue.unshift(neighbour);
    }
    if (currentNode === finishNode) {
      return seenNodes;
    }
  }
  return seenNodes;
}
