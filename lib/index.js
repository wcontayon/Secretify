"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const github_1 = require("@actions/github");
const optionsModel_1 = require("./optionsModel");
const fs = __importStar(require("fs"));
// Retrieve and validate inputs values
console.log("Retrieving and validating inputs values...");
let options = optionsModel_1.OptionsModel.fetchActionInputs();
optionsModel_1.OptionsModel.validate(options);
// Read file
console.log("Reading file...");
try {
    let content = fs.readFileSync(options.pathFile, "utf8");
    console.log("Content: ", content);
}
catch (err) {
    console.error("Error: ", err);
    if (options.throwIfNotFound) {
        throw err;
    }
}
let content = fs.readFileSync(options.pathFile, "utf8");
console.log("Content: ", content);
console.log("Context: ", github_1.context);
console.log("Hello World!");
