import { getInput } from "@actions/core";
import { context } from "@actions/github";
import { OptionsModel } from "./optionsModel";
import * as fs from "fs";

// Retrieve and validate inputs values
console.log("Retrieving and validating inputs values...");

let options = OptionsModel.fetchActionInputs();
OptionsModel.validate(options);

// Read file
console.log("Reading file...");
try {
  let content = fs.readFileSync(options.pathFile!, "utf8");
  console.log("Content: ", content);
} catch (err) {
  console.error("Error: ", err);
  if (options.throwIfNotFound) {
    throw err;
  }
}
let content = fs.readFileSync(options.pathFile!, "utf8");

console.log("Content: ", content);
console.log("Context: ", context);

console.log("Hello World!");
