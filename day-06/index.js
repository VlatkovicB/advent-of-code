import { data, sample } from "./utils.js";

const calculateNumberOfFish = (data, days) => {
  const fishBuckets = Array(9).fill(0)
  data.forEach(d => fishBuckets[d]++)

  for (let i = 0; i < days; i++) {
    const numberOfFishes = fishBuckets.shift()
    fishBuckets.push(numberOfFishes)
    fishBuckets[6] += numberOfFishes
  }

  return fishBuckets.reduce((p, c) => p + c, 0)
  /**
   *
   let fishes = data.join('')
   for (let i = 0; i < days; i++) {
    let addToQueue = ''
    fishes = fishes.split('').map(fish => {
      if (fish - 1 < 0) {
        addToQueue += 8
        return 6
      }
      return fish - 1
    }).join('')
    fishes += addToQueue
  }

   return fishes.length */
}

const dayOne = calculateNumberOfFish(data, 80) // SOLUTION 383160
const dayTwo = calculateNumberOfFish(data, 256) // SOLUTION 383160
const sampleResult = calculateNumberOfFish(sample, 18)

console.log(dayOne)
console.log(dayTwo)
console.log(sampleResult)