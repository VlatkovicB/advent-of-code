import { numbers, tickets, indexGroups, checkBingo, getSumUnmarked } from "./utils.js";

const checkNumbers = (tickets = [], numbers) => {
  let board, winningNumber;

  for (let n = 0; n < numbers.length; n++) {
    let t = 0;
    while (tickets.length > 0 && t < tickets.length) {
      const index = tickets[t].indexOf(numbers[n])
      if (index !== -1) {
        tickets[t][index] = 'XX'
      }

      if (checkBingo(tickets[t])) {
        board = tickets[t]
        winningNumber = numbers[n]
        tickets.splice(t, 1)
      } else {
        t++;
      }
    }
  }

  return getSumUnmarked(board) * winningNumber
}

const result = checkNumbers(tickets, numbers)
console.log(result)
