import fs from "fs";

const dayFour = fs.readFileSync("./dayFourData.txt", 'utf-8').split(/\n\s*\n/)
const [numbersRaw, ...bingoTicketsRaw] = dayFour

export const indexGroups = [
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

export const numbers = numbersRaw.split(',').map(n => Number(n))
export const tickets = bingoTicketsRaw.map(ticket => ticket.split(/\r?\n|\r/g).join(' ').trim().split(/\s+/).map(n => Number(n)))
export const checkBingo = data => indexGroups.map(group => group.map(g => data[g]).every(g => g === 'XX')).some(t => t)
export const getSumUnmarked = board => board.filter(x => x !== 'XX').reduce((p, c) => p + c, 0)
