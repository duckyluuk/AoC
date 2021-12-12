let inputData = ""
fetch("data/day1.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day1_1() {
    let t = Date.now()
    console.log(inputData.split("\n").filter((el, i, a) => {return +el > +a[i-1]}).length)
    console.log("Time:" + (Date.now()-t) + "ms")
}

function day1_2() {
    let t = Date.now()
    console.log(inputData.split("\n").map((el,i,a) => { return +el+(+a[i-1])+(+a[i-2]) }).filter((el,i,a) => { return el > a[i-1] }).length)
    console.log("Time:" + (Date.now()-t) + "ms") 
}

console.log("Day 1, Part 1")
day1_1()
console.log("Day 1, Part 2")
day1_2()
