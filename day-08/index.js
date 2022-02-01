import { data, sample } from "./utils.js";

const lengthsToFind = [2, 3, 4, 7]

const segmentSearch = (data) => data
  .map(item => item.split("|")
    .map(item => item.trim()))
  .map(item => item[1].split(' ')
    .map(item => item.length))
  .reduce((prev, curr) => {
    curr.map(item => {
      if (lengthsToFind.includes(item)) prev += 1
    })
    return prev
  }, 0)


const result = segmentSearch(data)
// console.log(sample)
console.log(result)