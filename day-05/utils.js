import fs from "fs";

const dayFive = fs.readFileSync("./dayFiveData.txt", 'utf-8').split(/\r?\n/)
const dayFiveSample = fs.readFileSync("./sampleData.txt", 'utf-8').split(/\r?\n/)

const processFile = (file) => file.map(item => item.split('->').map(i => i.trim().split(',').map(i => Number(i))))

export const data = processFile(dayFive)

export const sample = processFile(dayFiveSample)


