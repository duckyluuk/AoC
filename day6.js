let inputData = "2,1,1,4,4,1,3,4,2,4,2,1,1,4,3,5,1,1,5,1,1,5,4,5,4,1,5,1,3,1,4,2,3,2,1,2,5,5,2,3,1,2,3,3,1,4,3,1,1,1,1,5,2,1,1,1,5,3,3,2,1,4,1,1,1,3,1,1,5,5,1,4,4,4,4,5,1,5,1,1,5,5,2,2,5,4,1,5,4,1,4,1,1,1,1,5,3,2,4,1,1,1,4,4,1,2,1,1,5,2,1,1,1,4,4,4,4,3,3,1,1,5,1,5,2,1,4,1,2,4,4,4,4,2,2,2,4,4,4,2,1,5,5,2,1,1,1,4,4,1,4,2,3,3,3,3,3,5,4,1,5,1,4,5,5,1,1,1,4,1,2,4,4,1,2,3,3,3,3,5,1,4,2,5,5,2,1,1,1,1,3,3,1,1,2,3,2,5,4,2,1,1,2,2,2,1,3,1,5,4,1,1,5,3,3,2,2,3,1,1,1,1,2,4,2,2,5,1,2,4,2,1,1,3,2,5,5,3,1,3,3,1,4,1,1,5,5,1,5,4,1,1,1,1,2,3,3,1,2,3,1,5,1,3,1,1,3,1,1,1,1,1,1,5,1,1,5,5,2,1,1,5,2,4,5,5,1,1,5,1,5,5,1,1,3,3,1,1,3,1"

// Part 1
function day6_1() {
  let t = Date.now()
  let data = inputData
  data = data.split(",")
  for(let day=0; day<80; day++) {
    for(let i=0; i<data.length; i++) {
      data[i] = Number(data[i])-1
      if(data[i]<0) {
        data[i] = 6
        data.push(9)
      }
    }
  }
  console.log("Result: " + data.length)
  console.log("Time:" + (Date.now()-t) + "ms")
}

// Part 2
function day6_2() {
  let t = Date.now()
  let data = inputData
  data = data.split(",")
  let fish = []
  for(let i=0; i<=8; i++) {
    fish[i] = data.filter(function(e) { return e == i }).length
  }
  for(let day=0; day<256; day++) {
    let num = fish.shift();
    fish[6] += num
    fish[8] = num
  }
  let reducer = (acc, curr) => acc + curr;
  console.log("Result: " + fish.reduce(reducer))
  console.log("Time:" + (Date.now()-t) + "ms")
}

// Custom function outside of challenges, that can calculate the amount of fish even after a million days, or more
function day6_big(days) {
  let t = Date.now()
  let data = inputData
  data = data.split(",")
  let fish = []
  for(let i=0; i<=8; i++) {
    fish[i] = BigInt(data.filter(function(e) { return e == i }).length)
  }
  for(let day=0; day<days; day++) {
    let num = fish.shift();
    fish[6] += num
    fish[8] = num
  }
  let reducer = (acc, curr) => acc + curr;
  console.log("Result: " + fish.reduce(reducer))
  console.log("Time:" + (Date.now()-t) + "ms")
}

console.log("Day 6, Part 1")
day6_1()
console.log("Day 6, Part 2")
day6_2()

console.log("Fish after 100 years:")
day6_big(36525)
