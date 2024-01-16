"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fs_1 = __importDefault(require("fs"));
const process_1 = require("process");
// Run the main function after all the inputs are retrieved and validated
async function run(options, githubToken, githubContext) {
    var _a, _b;
    let fileContent = "";
    try {
        console.log("Reading file...");
        fileContent = await fs_1.default.readFileSync(options.pathFile, "utf8");
    }
    catch (error) {
        if (options.throwIfNotFound) {
            console.error("Error: ", error);
            throw new Error(`File not found: ${options.pathFile}`);
        }
        else {
            console.warn("File not found: ", options.pathFile);
            console.log("action will stop here");
            (0, process_1.exit)(-1);
        }
    }
    if (options.matchGithubSecrets) {
        console.log("Matching github secrets...");
        // retrieve secrets from github context
        console.log("Retrieving secrets from github context...");
        console.log("githubContext: ", githubContext);
        console.log("githubContext.payload: ", githubContext.payload);
    }
    else {
        console.log("Matching secrets from inputs...");
        (_a = options.secretsKeys) === null || _a === void 0 ? void 0 : _a.forEach((key, index) => {
            console.log(`Replacing ${key} with ${options.secretsValues[index]}`);
            fileContent = fileContent.replace(new RegExp(key, "g"), options.secretsValues[index]);
        });
        if (options.showOutPutFileContextDebug) {
            console.log("fileContent: ", fileContent);
        }
        console.log("Writing output file...");
        await fs_1.default.writeFileSync((_b = options.pathOutput) !== null && _b !== void 0 ? _b : options.pathFile, fileContent);
        (0, process_1.exit)(0);
    }
}
exports.run = run;
