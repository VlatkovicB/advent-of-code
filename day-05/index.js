import { data, sample } from "./utils.js";

const applyFilter = (data) => data.filter(line => (line[0][0] === line[1][0] || line[0][1] === line[1][1]) && line)
const generateMatrix = (x, y) => Array(Number(x)).fill(undefined).map(() => Array(Number(y)).fill(0))
const determineSize = (points) => points.reduce((p, c) => {
  if (c[0][0] > p.x) p.x = c[0][0]
  if (c[1][0] > p.x) p.x = c[1][0]
  if (c[0][1] > p.y) p.y = c[0][1]
  if (c[1][1] > p.y) p.y = c[1][1]
  return p
}, { x: 0, y: 0 })

const markNodesX = (data, x, y1, y2) => {
  const start = y1 > y2 ? y2 : y1
  const end = y1 > y2 ? y1 : y2

  for (let i = start; i <= end; i++) {
    data[x][i] = data[x][i] + 1
  }
}

const markNodesY = (data, y, x1, x2) => {
  const start = x1 > x2 ? x2 : x1
  const end = x1 > x2 ? x1 : x2

  for (let i = start; i <= end; i++) {
    data[i][y] = data[i][y] + 1
  }
}

const getOverlapping = (data) => {
  data = applyFilter(data)
  const { x, y } = determineSize(data)
  const emptyMatrix = generateMatrix(x + 1, y + 1)

  data.forEach(points => {
    const x1 = points[0][1]
    const x2 = points[1][1]
    const y1 = points[1][0]
    const y2 = points[0][0]
    const distanceX = Math.abs(x1 - x2)
    const distanceY = Math.abs(y1 - y2)

    if (!distanceX) {
      markNodesX(emptyMatrix, x1, y1, y2)
    }
    if (!distanceY) {
      markNodesY(emptyMatrix, y1, x1, x2)
    }
  })
  return emptyMatrix.reduce((prev, curr) => {
    const number = curr.filter(n => n > 1).length
    return prev + number
  }, 0)
}

const result = getOverlapping(data)
console.log(result)