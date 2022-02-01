import fs from "fs";

export const data = fs.readFileSync("./data.txt", 'utf-8').split(",")
export const sample = fs.readFileSync("./sample.txt", 'utf-8').split(",")




