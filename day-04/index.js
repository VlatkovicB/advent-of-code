import { dayFour } from "./utils.js";

const [numbers, ...bingoTickets] = dayFour

const indexGroups = [
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24],
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24]
]

const processNumbers = numbers => numbers.split(',').map(n => Number(n))
const processTickets = (ticketsRaw) => ticketsRaw.map(ticket => ticket.split(/\r?\n|\r/g).join(' ').trim().split(/\s+/).map(n => Number(n)))

const checkBingo = data => indexGroups.map(group => group.map(g => data[g]).every(g => g === 'XX')).some(t => t)
const getSumUnmarked = board => board.filter(x => x !== 'XX').reduce((p, c) => p + c, 0)

const checkNumbers = (tickets = [], numbers) => {
  let over, board, winningNumber;
  const realTickets = JSON.parse(JSON.stringify(tickets))
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

checkNumbers(processTickets(bingoTickets), processNumbers(numbers))

