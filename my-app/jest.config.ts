import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",

  testEnvironment: "jsdom",

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts",
  ],

  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx)",
    "**/?(*.)(test|spec).(ts|tsx)",
  ],

  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/app/layout.tsx",
  ],

  coverageDirectory: "coverage",
};

export default config;