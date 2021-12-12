let inputData = ""
fetch("data/day7.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day7_1() {
      let t = Date.now()
      let data = inputData
      data = data.split(",")
      data = data.sort()
      let highest = 2000
      let best = Infinity
      for(let i=Math.floor(data.length/4); i<highest; i++) {
        let current = 0
        for(let j=0; j<data.length; j++) {
          current += Math.abs(data[j] - i)
          if(i > 0 && current > best) {
            console.log("Result: " + best)
            console.log("Time:" + (Date.now()-t) + "ms")   
            return;
          };
        }
        best = current
      }
}

function day7_2() {
      let t = Date.now()
      let data = inputData
      data = data.split(",")
      data = data.sort()
      let highest = 2000
      let best = Infinity
      for(let i=Math.floor(data.length/4); i<highest; i++) {
        let current = 0
        for(let j=0; j<data.length; j++) {
          let dis = Math.abs(data[j] - i)
          current += dis * ((dis+1)/2)
          if(i > 0 && current > best) {
            console.log("Result: " + best)
            console.log("Time:" + (Date.now()-t) + "ms")   
            return;
          };
        }
        best = current
      }
}

console.log("Day 7, Part 1")
day7_1()
console.log("Day 7, Part 2")
day7_2()
