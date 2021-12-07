import type { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
  // testRegex: "test/**/*.test.js";
  preset: "ts-jest/presets/default-esm",
  setupFilesAfterEnv: ["<rootDir>/tests/setup.js"],
  globals: {
    "ts-jest": {
      // ts-jest configuration goes here
      useESM: true,
      compiler: "typescript",
    },
  },
};
export default config;
