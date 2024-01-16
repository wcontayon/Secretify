import { getInput } from "@actions/core";
import { context } from "@actions/github";
import { OptionsModel } from "./optionsModel";
import * as fs from "fs";
import { run } from "./main";

// Retrieve and validate inputs values
console.log("Retrieving and validating inputs values...");

let options = OptionsModel.fetchActionInputs();
OptionsModel.validate(options);

// Run the main function after all the inputs are retrieved and validated
run(options, getInput("github-token"), context);
