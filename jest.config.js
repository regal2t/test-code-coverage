module.exports = {
  coverageDirectory: "coverage", // Ensure the directory for the coverage report
  collectCoverage: true,         // Enable collection of coverage data
  collectCoverageFrom: [         // Specify which files to include for coverage
    "src/**/*.js",               // Include all JavaScript files in the `src` folder
    "!src/**/*.test.js"          // Exclude test files
  ],
  testMatch: ["**/tests/**/*.test.js"], // Ensure it matches your test files
  coverageReporters: ["lcov", "text-summary"], // Generate reports in both formats
};
