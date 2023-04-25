//Алгоритм Дейкстры для поиска кратчайшего пути

let graph = {};
graph["a"] = { b: 2, c: 1 };
graph["b"] = { f: 7 };
graph["c"] = { d: 5, e: 2 };
graph["d"] = { f: 2 };
graph["e"] = { f: 1 };
graph["f"] = { g: 1 };
graph["g"] = {};
function shortPath(graph, start, end) {
  let costs = {};
  let processed = [];
  let neighbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || Infinity;
    }
  });
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    let cost = costs[node];
    neighbors = graph[node];
    Object.keys(neighbors).forEach((neighbor) => {
      let newCost = cost + neighbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });

    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}
function findNodeLowestCost(costs, processed) {
  let lowestCost = Infinity;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    if (costs[node] < lowestCost && !processed.includes(node)) {
      lowestCost = costs[node];
      lowestNode = node;
    }
  });

  return lowestNode;
}
console.log(shortPath(graph, "a", "g"));
