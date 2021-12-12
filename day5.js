let inputData = ""
fetch("data/day5.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day5_1() {
    let t = Date.now()
    let data = inputData.split("\n")
    for(var i = 0; i < data.length; i++){
      data[i] = data[i].split("->")
      for(var j = 0; j < data[i].length; j++){
        data[i][j] = data[i][j].split(",")
        data[i][j][0] = Number(data[i][j][0])
        data[i][j][1] = Number(data[i][j][1])
      }
    }
    data = data.filter(function(e) {
      return e[0][0] == e[1][0] || e[0][1] == e[1][1]
    })
    let count = 0
    let board = Array(1000).fill().map(() => Array(1000).fill(0));
    
    for(let i = 0; i < data.length; i++) {
      let diff = Math.max(Math.abs(data[i][0][0] - data[i][1][0]), Math.abs(data[i][0][1] - data[i][1][1]))
      let x = data[i][0][0]
      let y = data[i][0][1]
      for(let j=0; j<=diff; j++) {
        if(data[i][0][0] < data[i][1][0]) x = data[i][0][0]+j
        if(data[i][0][0] > data[i][1][0]) x = data[i][0][0]-j
        if(data[i][0][1] < data[i][1][1]) y = data[i][0][1]+j
        if(data[i][0][1] > data[i][1][1]) y = data[i][0][1]-j
        board[x][y]++
        if(board[x][y] == 2) {
          count++
        }
      }
    }
    console.log("Result: " + count)
    console.log("Time:" + (Date.now()-t) + "ms")
}

function day5_2() {
    let t = Date.now()
    let data = inputData.split("\n")
    for(var i = 0; i < data.length; i++){
      data[i] = data[i].split("->")
      for(var j = 0; j < data[i].length; j++){
        data[i][j] = data[i][j].split(",")
        data[i][j][0] = Number(data[i][j][0])
        data[i][j][1] = Number(data[i][j][1])
      }
    }
    //console.log(data)
    let count = 0
    let board = Array(1000).fill().map(() => Array(1000).fill(0));
    
    for(let i = 0; i < data.length; i++) {
      let diff = Math.max(Math.abs(data[i][0][0] - data[i][1][0]), Math.abs(data[i][0][1] - data[i][1][1]))
      let x = data[i][0][0]
      let y = data[i][0][1]
      //console.log(i)
      //console.log(diff)
      for(let j=0; j<=diff; j++) {
        
        if(data[i][0][0] < data[i][1][0]) x = data[i][0][0]+j
        if(data[i][0][0] > data[i][1][0]) x = data[i][0][0]-j
        if(data[i][0][1] < data[i][1][1]) y = data[i][0][1]+j
        if(data[i][0][1] > data[i][1][1]) y = data[i][0][1]-j
        //console.log(x, y)
        board[x][y]++
        if(board[x][y] == 2) {
          count++
        }
      }
    }
    console.log(board)
    console.log("Result: " + count)
    console.log("Time:" + (Date.now()-t) + "ms")
}

console.log("Day 5, Part 1")
day5_1()
console.log("Day 5, Part 2")
day5_2()
