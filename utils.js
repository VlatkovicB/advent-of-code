import fs from "fs";

export const data = fs.readFileSync("../data.txt", 'utf-8').split(/\r?\n/)