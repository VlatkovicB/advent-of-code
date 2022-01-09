import { data, sample } from "./utils.js";

const checkHorizontalAndVertical = p => p[0][0] === p[1][0] || p[0][1] === p[1][1]
const checkDiagonal = (p) => (p[0][0] === p[0][1] && p [1][0] === p[1][1]) || (p[0][0] === p[1][1] && p[1][0] === p[0][1])
const generateMatrix = (x, y) => Array(Number(x)).fill(undefined).map(() => Array(Number(y)).fill(0))
const determineSize = (d) => d.reduce((p, c) => {
  if (c[0][0] > p.x) p.x = c[0][0]
  if (c[1][0] > p.x) p.x = c[1][0]
  if (c[0][1] > p.y) p.y = c[0][1]
  if (c[1][1] > p.y) p.y = c[1][1]
  return p
}, { x: 0, y: 0 })

const changeValue = (value, directive) => {
  if (directive === '+') return value + 1
  if (directive === '-') return value - 1
  return value
}
const check = (sign, n, endN) => {
  if (sign === '+') return n <= endN
  if (sign === '-') return n >= endN
  return true
}
const markNodes = (data, points) => {
  const x1 = points[0][0]
  const x2 = points[1][0]
  const y1 = points[0][1]
  const y2 = points[1][1]
  const xSign = x1 > x2 ? "-" : x2 > x1 ? "+" : ""
  const ySign = y1 > y2 ? "-" : y2 > y1 ? "+" : ""

  if (checkDiagonal(points) || checkHorizontalAndVertical(points)) {
    for (let x = x1, y = y1, endX = x2, endY = y2; check(xSign, x, endX) && check(ySign, y, endY);) {
      data[x][y] = data[x][y] + 1
      x = changeValue(x, xSign)
      y = changeValue(y, ySign)
    }
  }
}

const getOverlapping = (data) => {
  const { x, y } = determineSize(data)
  const emptyMatrix = generateMatrix(x + 1, y + 1)
  data.forEach(points => {
    markNodes(emptyMatrix, points)
  })

  if (data.length < 20) console.table(emptyMatrix)

  console.log(emptyMatrix.length)
  return emptyMatrix.reduce((prev, curr) => {
    const number = curr.filter(n => n > 1).length
    return prev + number
  }, 0)
}

// const noDiagonal = getOverlapping(sample)
// console.log(noDiagonal)
const diagonal = getOverlapping(data)
console.log(diagonal)
