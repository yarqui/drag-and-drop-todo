let userInput: unknown;
let userName: string;

userInput = 5;
if (typeof userInput === "string") {
  userName = userInput;
}

// "never" type explicitly specifies that the function never returns anything
const generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};

generateError("Opps, error", 500);
