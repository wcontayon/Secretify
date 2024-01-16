import { getInput } from "@actions/core";

export class OptionsModel {
  pathFile?: string;
  pathOutput?: string;
  matchGithubSecrets?: boolean;
  secretsKeys?: string[];
  secretsValues?: string[];
  throwIfNotFound?: boolean;

  constructor() {
    this.pathFile = "";
    this.pathOutput = "";
    this.matchGithubSecrets = false;
    this.secretsKeys = [];
    this.secretsValues = [];
  }

  public static fetchActionInputs(): OptionsModel {
    const options = new OptionsModel();

    options.pathFile = getInput("path-file");
    options.pathOutput = getInput("path-output");
    options.matchGithubSecrets = getInput("match-github-secrets") === "true";
    options.secretsKeys = getInput("secrets-keys").split(",");
    options.secretsValues = getInput("secrets-values").split(",");
    options.throwIfNotFound = getInput("throw-if-not-found") === "true";

    return options;
  }

  public static validate(options: OptionsModel) {
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
        throw new Error(
          "secrets-keys and secrets-values must have the same length"
        );
      }
    }
  }
}
