import { dayTwo } from "./utils.js";

const calculateDistance = (data = []) => {
  const { forward, down, up } = data.reduce((prev, curr) => {
    const [direction, amount] = curr.split(' ')
    if (!prev[direction]) {
      prev[direction] = Number(amount)
    } else {
      prev[direction] += Number(amount)
    }

    return prev
  }, {})
  console.log(up, down, forward)
  return forward * Math.abs(down - up)
}


console.log(calculateDistance(dayTwo))