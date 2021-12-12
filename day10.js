let inputData = ""
fetch("data/day10.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day10_1() {
    let t = Date.now()
    let data = inputData.split("\n")
    let tot = 0
    let values = {")":3,"]":57,"}":1197,">":25137}
    for(let i=0; i<data.length; i++) {
      let line = data[i]
      while(1) {
        let line2 = line
        line = line.replace(/\(\)|\[\]|\{\}|\<\>/g, "")
        if(line == line2) break;
      } 
      let char = line.replace(/\(|\[|\{|\</g, "")
      if(char) tot+=values[char.charAt(0)]
    } 
    console.log(tot)
    console.log("Time:" + (Date.now()-t) + "ms")
}

function day10_2() {
    let t = Date.now()
    let inverse = {"(":")","[":"]","{":"}","<":">"}
    let values = ["", ")", "]", "}", ">"]
    let tot = 0
    let data = inputData.split("\n").map(line => {
      while(1) {
        let line2 = line
        line = line.replace(/\(\)|\[\]|\{\}|\<\>/g, "")
        if(line == line2) break
      }
      return (!line.replace(/\(|\[|\{|\</g, "").charAt(0) ?  
                line.split("").reverse().join("").replace(/\(|\[|\{|\</g, m => inverse[m] )
                  .split("").reduce((tot,el) => tot*5+values.indexOf(el), 0)
                : "")
    }).filter(el => { return el != "" }).sort((a,b)=> a-b)
    console.log(data[Math.floor(data.length/2)])
    console.log("Time:" + (Date.now()-t) + "ms")
  })
}

console.log("Day 10, Part 1")
day10_1()
console.log("Day 10, Part 2")
day10_2()
