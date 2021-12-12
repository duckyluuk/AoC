let inputData = ""
fetch("data/day2.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day2_1() {
    let t = Date.now()
    let pos=[0,0]
    data.split("\n").map(e => { return e.split(" ") }).forEach(el => { 
      if(el[0] == "forward") pos[0]+= +el[1];
      else if(el[0] == "up") pos[1]-= +el[1];
      else if(el[0] == "down") pos[1]+= +el[1]
    })
    console.log(pos[0]*pos[1])
    console.log("Time:" + (Date.now()-t) + "ms")
}

function day2_2() {
    let t = Date.now()
    let pos=[0,0,0]
    data.split("\n").map(e => { return e.split(" ") }).forEach(el => { 
      if(el[0] == "forward") {
        pos[0]+= +el[1];
        pos[1]+= +el[1]*pos[2];
      }
      else if(el[0] == "up") pos[2]-= +el[1];
      else if(el[0] == "down") pos[2]+= +el[1]
    })
    console.log(pos[0]*pos[1])
    console.log("Time:" + (Date.now()-t) + "ms")
}

console.log("Day 2, Part 1")
day2_1()
console.log("Day 2, Part 2")
day2_2()
