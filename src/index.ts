import * as fs from "fs";
import { calculateExpression } from "./calculate-expression";

const fileContents = fs.readFileSync("input.csv", {encoding: "utf-8"})
const lines = fileContents.split(/\r\n|\r|\n/);
const constants: number[] = lines[0].split(",").map(constantString => +constantString);
const expressionsLines: string[][] = [];
lines.slice(1).forEach(line => {
    expressionsLines.push(line.split(","))
});

const computedLines = expressionsLines.map(expressionLine => expressionLine.map(expression => calculateExpression(constants, expression)));


let outputData = "";
outputData += constants.join(",");
outputData += "\n";
outputData += computedLines.join("\n");

fs.writeFileSync("output.csv", outputData);

