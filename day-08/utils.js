import fs from "fs";

const process = (path) => fs.readFileSync(path, 'utf-8')
  .split(/\r?\n/)
// .map(item => item.split("|").map(item => item.trim().split(" ")).flat())

export const data = process("./data.txt")
export const sample = process("./sample.txt")





