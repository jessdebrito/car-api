/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  
  coverageProvider: "v8",
  preset: "ts-jest",
  setupFiles: ["./src/api/@shared/tests/setupFiles.ts"],

  testMatch: ["**/__tests__/(unit|integration)/**/*.test.[jt]s"],

  

};

export default config;
