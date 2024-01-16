"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsModel = void 0;
const core_1 = require("@actions/core");
class OptionsModel {
    constructor() {
        this.pathFile = "";
        this.pathOutput = "";
        this.matchGithubSecrets = false;
        this.secretsKeys = [];
        this.secretsValues = [];
    }
    static fetchActionInputs() {
        const options = new OptionsModel();
        options.pathFile = (0, core_1.getInput)("path-file");
        options.pathOutput = (0, core_1.getInput)("path-output");
        options.matchGithubSecrets = (0, core_1.getInput)("match-github-secrets") === "true";
        options.secretsKeys = (0, core_1.getInput)("secrets-keys").split(",");
        options.secretsValues = (0, core_1.getInput)("secrets-values").split(",");
        options.throwIfNotFound = (0, core_1.getInput)("throw-if-not-found") === "true";
        options.showOutPutFileContextDebug = (0, core_1.getInput)("show-output") === "true";
        return options;
    }
    static validate(options) {
        if (!options.pathFile) {
            throw new Error("path-file is required");
        }
        if (!options.matchGithubSecrets) {
            if (!options.secretsKeys || options.secretsKeys.length === 0) {
                throw new Error("secrets-keys is required");
            }
            if (!options.secretsValues || options.secretsValues.length === 0) {
                throw new Error("secrets-values is required");
            }
            if (options.secretsKeys.length !== options.secretsValues.length) {
                throw new Error("secrets-keys and secrets-values must have the same length");
            }
        }
    }
}
exports.OptionsModel = OptionsModel;
