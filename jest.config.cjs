module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json"
    }
  }
};