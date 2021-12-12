let inputData = ""
fetch("data/day4.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day4_1() {
    let t = Date.now()
    let boards = data.split("\n\n")
    let nums = boards.shift()
    for(let i=0; i<boards.length; i++) {
      boards[i] = boards[i].split("\n")
      for(let j=0; j<boards[i].length; j++) {
        boards[i][j] = boards[i][j].split(" ").filter(function(e) {return e.length > 0})
      }
    }
    nums = nums.split(",")
  
    for(let n=0; n<nums.length; n++) {
      let num=nums[n]
      for(let a=0; a<boards.length; a++) {
        for(let b=0; b<boards[a].length; b++) {
          for(let c=0; c<boards[a][b].length; c++) {
            if(boards[a][b][c] == num) boards[a][b][c] = 100
            
            let hSum = 0, vSum = 0, dSum1 = 0, dSum2 = 0
            for(let i=0; i<5; i++) {
              hSum += Number(boards[a][b][i])
              vSum += Number(boards[a][i][b])
              dSum1 += Number(boards[a][i][i])
              dSum2 += Number(boards[a][i][4-i])
            }
            if(hSum == 500 || vSum == 500 || dSum1 == 500 || dSum2 == 500) {
              let sumLeft = 0
              for(let i=0; i<boards[a].length; i++) {
                for(let j=0; j<boards[a][i].length; j++) {
                  //console.log(boards[a])
                  if(boards[a][i][j] < 100) sumLeft += Number(boards[a][i][j])
                }
              }
              console.log(boards)
              console.log(num, sumLeft)
              console.log("Result: " + num * sumLeft)
              console.log("Time:" + (Date.now()-t) + "ms")
              return;
            }
          }
        }
      }
    }
}

function day4_2() {
    let t = Date.now()
    let boards = inputData.split("\n\n")
    let nums = boards.shift()
    for(let i=0; i<boards.length; i++) {
      boards[i] = boards[i].split("\n")
      for(let j=0; j<boards[i].length; j++) {
        boards[i][j] = boards[i][j].split(" ").filter(function(e) {return e.length > 0})
      }
    }
    nums = nums.split(",")
    let wins = []
    
    for(let n=0; n<nums.length; n++) {
      let num=nums[n]
      for(let a=0; a<boards.length; a++) {
        if(wins.includes(a)) continue;
        for(let b=0; b<boards[a].length; b++) {
          for(let c=0; c<boards[a][b].length; c++) {
            if(boards[a][b][c] == num) boards[a][b][c] = 100
            
            let hSum = 0, vSum = 0, dSum1 = 0, dSum2 = 0
            for(let i=0; i<5; i++) {
              hSum += Number(boards[a][b][i])
              vSum += Number(boards[a][i][b])
              dSum1 += Number(boards[a][i][i])
              dSum2 += Number(boards[a][i][4-i])
            }
            if(hSum == 500 || vSum == 500 || dSum1 == 500 || dSum2 == 500) {
              let sumLeft = 0
              
              if(!wins.includes(a)) wins.push(a)
              if(wins.length == boards.length) {
                console.log(wins)
                for(let i=0; i<boards[a].length; i++) {
                  for(let j=0; j<boards[a][i].length; j++) {
                    //console.log(boards[a])
                    if(boards[a][i][j] < 100) sumLeft += Number(boards[a][i][j])
                  }
                }
                console.log(num * sumLeft)
                console.log("Time:" + (Date.now()-t) + "ms")
                return;
              }
            }
          }
        }
      }
    }
}

console.log("Day 4, Part 1")
day4_1()
console.log("Day 4, Part 2")
day4_2()
