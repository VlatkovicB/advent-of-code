import { dayTwo } from "./utils.js";

const data = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
]

const calculateDistance = (data = []) => {
  const { forward, depth } = data.reduce((prev, curr) => {
    let [direction, amount] = curr.split(' ')
    amount = Number(amount)

    if (direction === 'down') {
      prev.aim -= amount
    }
    if (direction === 'up') {
      prev.aim += amount
    }

    if (direction === 'forward') {
      prev.forward += amount
      prev.depth += amount * Math.abs(prev.aim)
    }

    return prev
  }, { forward: 0, aim: 0, depth: 0 })


  return forward * depth
}


console.log(calculateDistance(dayTwo))