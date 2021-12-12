import fs from "fs";

const depths = fs.readFileSync("../data.txt", 'utf-8').split(/\r?\n/)

const result = depths.reduce((prev, curr, acc) => {
  if (prev.prev < curr) {
    prev.count++;
  }
  prev.prev = curr
  return prev
}, { prev: null, count: 0 })

console.log(result)