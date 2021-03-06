import { numbers, tickets, indexGroups, checkBingo, getSumUnmarked } from "./utils.js";

const checkNumbers = (tickets = [], numbers) => {
  let over, board, winningNumber;

  for (let n = 0; n < numbers.length; n++) {
    if (over) break
    for (let t = 0; t < tickets.length; t++) {
      const index = tickets[t].indexOf(numbers[n])
      if (index !== -1) {
        tickets[t][index] = 'XX'
      }

      over = checkBingo(tickets[t])
      if (over) {
        board = tickets[t]
        winningNumber = numbers[n]
        break
      }
    }
  }

  return getSumUnmarked(board) * winningNumber
}

const result = checkNumbers(tickets, numbers)
console.log(result)
