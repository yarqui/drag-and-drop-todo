// optional chaining lets you first check if the property exists in an object and then go further if it is
const fetchedUser = {
  id: "i1",
  name: "Yar",
  job: {
    title: "Software Developer",
    company: "Google",
  },
};

console.log(fetchedUser?.job?.company);
