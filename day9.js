let inputData = ""
fetch("data/day9.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day9_1() {
    let t = Date.now()
    let total = 0
    let data = inputData
    let arr = new Array(data[0].length+2).fill("9")
    data = [arr, ...data.split("\n").map(i => ["9", ...i.split(""), "9"]), arr]
    let positions = [[-1,0],[1,0],[0,-1],[0,1]]
    for(let i=1; i<data.length - 1; i++) {
      for(let j=1; j<data[i].length -1; j++) {
        let current = data[i][j]
        let lowest = true
        positions.forEach(p => {
          if(current >= data[i+p[0]][j+p[1]]) {
            lowest = false;
          }
        })
        
        if(lowest) {total+= Number(current)+1}
      }
    }
    console.log(total)
    console.log("Time:" + (Date.now()-t) + "ms")
}

function day9_2() {
    let t = Date.now()
    let data = inputData
    let arr = new Array(data[0].length+2).fill("9")
    data = [arr, ...data.split("\n").map(i => ["9", ...i.split(""), "9"]), arr]
    let positions = [[-1,0],[1,0],[0,-1],[0,1]]
    let basinSizes = []
    for(let i=1; i<data.length - 1; i++) {
      for(let j=1; j<data[i].length -1; j++) {
        let lowest = true
        positions.forEach(p => {
          if(data[i][j] >= data[i+p[0]][j+p[1]]) {
            lowest = false;
          }
        })
        if(lowest) basinSizes.push(count(data, [], i, j))
      }
    }
    basinSizes.sort((a, b) => { return a.length - b.length})
    let total = basinSizes.slice(-3).reduce((tot, el) => tot * el.length, 1)
    console.log(total)
    console.log("Time:" + (Date.now()-t) + "ms")
    
    function count(data,c, i, j) {
      let positions = [[-1,0],[1,0],[0,-1],[0,1]]
      for(let p of positions) {
        let x = i+p[0], y = j+p[1]
        if(c.includes(""+x+y)) continue;
        if(data[x][y] < 9) c = count(data, [...c, ""+x+y], x, y)
      }
      return c
    }
}


console.log("Day 9, Part 1")
day9_1()
console.log("Day 9, Part 2")
day9_2()
