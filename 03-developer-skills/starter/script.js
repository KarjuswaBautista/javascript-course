// // ////////////////////////////////////
// // // Professional Development Environment Setup

// // console.log("=== DEVELOPMENT ENVIRONMENT SETUP ===");

// // // Create some messy code - don't worry about formatting yet
// // const messyExample = function (name, age) {
// //   if (age >= 18) {
// //     return "Hello " + name + ", you are an adult";
// //   } else {
// //     return "Hello " + name + ", you are a minor";
// //   }
// // };

// // console.log("Current messy code example:", messyExample("John", 25));
// // console.log("Goal: Automatic formatting, auto-refresh, and typing shortcuts");

// // ////////////////////////////////////
// // // Extension Installation Test

// // function testExtensions() {
// //   const extensionTests = [
// //     { name: "Prettier", status: "installed", purpose: "code formatting" },
// //     { name: "Live Server", status: "installed", purpose: "auto refresh" },
// //     {
// //       name: "Auto Rename Tag",
// //       status: "installed",
// //       purpose: "HTML efficiency",
// //     },
// //   ];

// //   return extensionTests;
// // }

// // const extensionStatus = testExtensions();
// // console.log("Extension installation status:", extensionStatus);

// ////////////////////////////////////
// // SYSTEMATIC DEBUGGING AND ENHANCEMENT

// // Completely fixed and enhanced version
// function enhancedForecastFunction(temperatures, options = {}) {
//   // Step 5 - PREVENT: Add comprehensive input validation
//   if (!Array.isArray(temperatures) || temperatures.length === 0) {
//     console.error("Invalid input: temperatures must be a non-empty array");
//     return "";
//   }

//   // Step 4 - FIX: Use modern JavaScript with proper declarations
//   const { unit = "°C", separator = "...", includeIndex = true } = options;

//   // Step 4 - FIX: Correct loop bounds and string building
//   let result = "";

//   for (let i = 0; i < temperatures.length; i++) {
//     const dayNumber = includeIndex ? i + 1 : i;
//     result += `${temperatures[i]}${unit} in ${dayNumber} days${separator}`;
//   }

//   // Step 5 - PREVENT: Return clean result without trailing separator
//   return separator + result.slice(0, -separator.length);
// }

// // Test the enhanced function with multiple configurations
// console.log("Enhanced function (default):", enhancedForecastFunction(testData));
// console.log(
//   "Enhanced function (custom):",
//   enhancedForecastFunction(testData, {
//     unit: "°F",
//     separator: " | ",
//     includeIndex: true,
//   })
// );

// console.log("🎯 Complete developer skills successfully applied!");
// console.log("Legacy code debugged, fixed, and enhanced systematically");