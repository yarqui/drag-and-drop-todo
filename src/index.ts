type User = {
  id: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User;
};

let users: Users = {};
console.log("users:", users);

let Alex: User = {
  id: "1",
  name: "Alex",
  email: "alex@example.com",
};
console.log("Alex:", Alex);

let Yar: User = {
  id: "2",
  name: "Yar",
  email: "email address",
};

users[Alex.id] = Alex;
console.log("[Alex.id]:", [Alex.id]);
users[Yar.id] = Yar;

console.log("users:", users);
