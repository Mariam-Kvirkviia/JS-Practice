// поиск в ширину
//FIFO
let graph = {};
graph["a"] = ["b", "c"];
graph["b"] = ["f"];
graph["c"] = ["d", "e"];
graph["d"] = ["f"];
graph["e"] = ["f"];
graph["f"] = ["g"];
function breadthSearch(graph, start, end) {
  let queue = [start];
  while (queue.length > 0) {
    let current = queue.shift();
    if (graph[current]?.includes(end)) {
      return true;
    }
    if (!graph[current]) {
      graph[current] = [];
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}
console.log(breadthSearch(graph, "a", "g"));