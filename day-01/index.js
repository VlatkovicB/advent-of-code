import { dayOne } from "./utils.js";

const calculateCount = (data = []) => data.reduce((prev, curr) => {
  if (prev.prev < curr) {
    prev.count++;
  }
  prev.prev = curr
  return prev
}, { prev: null, count: 0 }).count

const slidingWindow = (data = [], window = 3) => {

  const result = data.reduce((prev, curr) => {
    prev.map(group => {
      if (group.length < window) {
        group.push(curr)
      }
    })

    prev.push([curr])

    return prev
  }, [])

  result.splice(-3)

  return result.map(group => group.reduce((prev, curr) => Number(prev) + Number(curr), 0))
}

console.log(calculateCount(slidingWindow(dayOne)))
