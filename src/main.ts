import { Context } from "@actions/github/lib/context";
import { OptionsModel } from "./optionsModel";
import fs from "fs";
import { exit } from "process";

// Run the main function after all the inputs are retrieved and validated
export function run(
  options: OptionsModel,
  githubToken: string,
  githubContext: Context
) {
  let fileContent = "";
  try {
    console.log("Reading file...");
    fileContent = fs.readFileSync(options.pathFile!, "utf8");
  } catch (error) {
    if (options.throwIfNotFound) {
      console.error("Error: ", error);
      throw new Error(`File not found: ${options.pathFile}`);
    } else {
      console.warn("File not found: ", options.pathFile);
      console.log("action will stop here");
      exit(-1);
    }
  }

  // retrieve secrets from github context
  console.log("Retrieving secrets from github context...");
  console.log("githubContext: ", githubContext);
  console.log("githubContext.payload: ", githubContext.payload);
}
