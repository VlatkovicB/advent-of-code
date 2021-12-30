import fs from "fs";

export const dayOne = fs.readFileSync("./dayOneData.txt", 'utf-8').split(/\r?\n/)