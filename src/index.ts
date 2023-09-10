// Nullish coalescing "??" lets you check whether the value is null or undefined.
// Used when we accept the value to be an empty string "", for example, or a zero (falsy values)

const userInput = "";

// ❌ const storedData = userInput || "Default value";
const storedData = userInput ?? "Default value";
console.log("storedData:", storedData); // storedData: ""
