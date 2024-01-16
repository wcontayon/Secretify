"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const github_1 = require("@actions/github");
const optionsModel_1 = require("./optionsModel");
const main_1 = require("./main");
// Retrieve and validate inputs values
console.log("Retrieving and validating inputs values...");
let options = optionsModel_1.OptionsModel.fetchActionInputs();
optionsModel_1.OptionsModel.validate(options);
// Run the main function after all the inputs are retrieved and validated
(0, main_1.run)(options, (0, core_1.getInput)("github-token"), github_1.context);
