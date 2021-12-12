let inputData = ""
fetch("data/day11.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day11_1() {
    let t = Date.now()
    let data = inputData.split("\n").map(d => d.split("").map(n => +n))
    let flash=0
    for(let i=0; i<100;i++) {
      for(let y=0; y<data.length; y++) {
        for(let x=0; x<data[y].length; x++) {
          data = update(data,x,y)
        }
      }
      for(let y=0; y<data.length; y++) {
        for(let x=0; x<data[y].length; x++) {
          if(data[y][x] > 9) data[y][x] = 0
        }
      }
    }
    console.log(flash)
    console.log("Time:" + (Date.now()-t) + "ms")
    
    function update(d,x,y) {
      if(y >= 0 && y < d.length && x >= 0 && x < d[y].length) {
        d[y][x]++
        if(d[y][x] == 10) {
          flash++
          for(let i=x-1; i<=x+1; i++) {
            for(let j=y-1; j<=y+1; j++) {
                d = update(d,i,j)
            }
          }
        }
      }
      return d;
    }
}

function day11_2() {
    let t = Date.now()
    let data = inputData.split("\n").map(d => d.split("").map(n => +n))
    let end = false, i = 0
    while(!end) {
      i++
      for(let y=0; y<data.length; y++) {
        for(let x=0; x<data[y].length; x++) {
          data = update(data,x,y)
        }
      }
      for(let y=0; y<data.length; y++) {
        for(let x=0; x<data[y].length; x++) {
          if(data[y][x] > 9) data[y][x] = 0
        }
      }
      if(data.reduce((arr, el) => arr.concat(el)).reduce((tot, el) => tot + el) == 0) end = true
    }
    console.log(i)
    console.log("Time:" + (Date.now()-t) + "ms")
    
    function update(d,x,y) {
      if(y >= 0 && y < d.length && x >= 0 && x < d[y].length) {
        d[y][x]++
        if(d[y][x] == 10) {
          for(let i=x-1; i<=x+1; i++) {
            for(let j=y-1; j<=y+1; j++) {
                d = update(d,i,j)
            }
          }
        }
      }
      return d;
    }
}

console.log("Day 11, Part 1")
day11_1()
console.log("Day 11, Part 2")
day11_2()
