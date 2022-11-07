module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: ["<rootDir>/src/index.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.build/"],
};
