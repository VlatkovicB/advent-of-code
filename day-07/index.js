import { data, sample } from "./utils.js";

const moveCrabs = (data) => {
  console.log(data)
  const original = data.sort((a, b) => Number(a) > Number(b) ? 1 : -1)
  const first = original.splice(0, Math.floor(data.length / 10))
  const last = original.splice(data.length - data.length / 10)
  console.log(data, first, last)

  const average = Math.round(original.reduce((p, c) => p + Number(c), 0) / original.length)
  console.log(average)
  const start = data.reduce((p, c) => p + Math.abs(c - average), 0)

  return start

}

const result = moveCrabs(sample)

console.log(result)