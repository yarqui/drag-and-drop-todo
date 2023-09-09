interface ErrorContainer {
  id: string; // 📍 we can also predefine some of the properties WITH the same type
  [prop: string]: string;
}

const errorWrap: ErrorContainer = {
  id: "12", // 📍 we could type 1: "12" - 1 can be converted to string, because the type of key is a string
  email: "Wrong Email",
};
