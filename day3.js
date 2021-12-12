let inputData = ""
fetch("data/day0.txt")
  .then(res => res.text)
  .then(data => inputData = data)

function day3_1(){
    let t = Date.now()
    let data = inputData.split("\n")
    for(let i=0; i<data.length; i++) {
      data[i] = data[i].split('')
    }
    let gamma = 0;
    let epsilon = 0;
    for(let i=0; i<data[0].length; i++) {
      let count = 0
      for(let j=0; j<data.length; j++) {
        count += Number(data[j][i])
      }
      let common = Math.round(count/data.length)
      gamma += common*Math.pow(2,data[0].length-i-1)
      epsilon += (1-common)*Math.pow(2,data[0].length-i-1)
      
    }
    console.log(gamma * epsilon)
    console.log("Time:" + (Date.now()-t) + "ms")
}

function day3_2_2(){
    let t = Date.now()
    let data = inputData.split("\n")
    for(let i=0; i<data.length; i++) {
      data[i] = data[i].split('')
    }
    let oxygen = data.slice()
    let co2 = data.slice()
    let commonO2  = 0;
    let commonCO2 = 0;
    for(let i=0; i<data[0].length; i++) {
      let countO2 = 0
      let countCO2 = 0
      for(let j=0; j<oxygen.length; j++) {
        countO2 += Number(oxygen[j][i])
      }
      for(let j=0; j<co2.length; j++) {
        countCO2 += Number(co2[j][i])
      }
      commonO2 = Math.round(countO2/oxygen.length)
      commonCO2 = Math.round(countCO2/co2.length)

      if(oxygen.length > 1) {
        oxygen = oxygen.filter(function(e) {
          return e[i] == commonO2
        })
      }
      if(co2.length > 1) {
        co2 = co2.filter(function(e) {
          return e[i] == 1-commonCO2
        })
      }
    }
    let oxygenNum = parseInt(oxygen[0].join(""),2)
    let co2Num = parseInt(co2[0].join(""),2)
    console.log(oxygenNum*co2Num)
    console.log("Time:" + (Date.now()-t) + "ms")
}

console.log("Day 3, Part 1")
day3_1()
console.log("Day 3, Part 2")
day3_2()
