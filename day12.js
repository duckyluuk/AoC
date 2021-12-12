let inputData = ""
fetch("data/day12.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day12() {
    let t = Date.now()
    let lines = inputData.split("\n").map(d => d.split("-"))
    let caveNames = [...new Set([].concat(...lines))]
    let connections = {}
    for(let c of caveNames) connections[c] = lines.filter(line => line.includes(c)).map(link => link.find(cave => cave != c))
    
    console.log("Day 12, Part 1")
    console.log(findPaths("start", 0, [], "", false))
    console.log("Day 12, Part 2")
    console.log(findPaths("start", 0, [], "", true))
    console.log("Time:" + (Date.now()-t) + "ms")
    
    function findPaths(cave, paths, visited, secondVisit, visitTwice) {
      let visitedCopy = [...visited]
      if(cave.toLowerCase() == cave && secondVisit == "" && visitedCopy.includes(cave)) secondVisit = cave
      visitedCopy.push(cave)
      for(let c of connections[cave]) {
        if(c == "start") continue;
        else if(c == "end") {
          paths++ 
          continue;
        } else if(c.toLowerCase() == c && visitedCopy.filter(v => v==c).length > (visitTwice ? +!secondVisit : 0)) continue;
        else paths = findPaths(c, paths, visitedCopy, secondVisit, visitTwice)
      }
      return paths;
    }
}

day12()
