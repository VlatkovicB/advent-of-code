import { dayThree } from "./utils.js";

function process(data, index, type) {

  if (data.length === 1) return data[0]
  if (data.length === 0) return false

  const { first } = data.reduce((prev, curr) => {
    if (curr[index] === "1") prev["first"] += 1
    return prev
  }, { first: 0 })

  let condition;
  if (first > data.length / 2) condition = type ? "1" : "0"
  if (first < data.length / 2) condition = type ? "0" : "1"
  if (first === data.length / 2) condition = type ? "1" : "0"

  data = data.filter(entry => entry[index] === condition)

  return process(data, index + 1, type)
}


const produceReport = (data = []) => {
  const oxygen = parseInt(process(data, 0, true), 2)
  const co2 = parseInt(process(data, 0, false), 2)

  return oxygen * co2
}

console.log(produceReport(dayThree))