import { dayThree } from "./utils.js";

const produceReport = (data = []) => {
  const result = data.reduce((prev, curr) => {
    for (let i = 0; i < curr.length; i++) {
      if (!prev[i]) prev[i] = 0
      if (curr[i] === "1") prev[i] += 1
    }
    return prev
  }, {})

  const { gamma, epsilon } = Object.values(result).reduce((prev, curr, index) => {
    console.log(curr, data.length)
    if (curr < data.length / 2) {
      prev.epsilon += 0
      prev.gamma += 1
    } else {
      prev.epsilon += 1
      prev.gamma += 0
    }

    return prev
  }, { "gamma": "", "epsilon": "" })

  return parseInt(gamma, 2) * parseInt(epsilon, 2)
}


console.log(produceReport(dayThree))