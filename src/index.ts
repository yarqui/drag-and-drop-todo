type Dog = {
  legs: 4;
  bark: () => void;
};

type Fish = {
  fins: 2;
  swim: () => void;
};

let pet: Dog | Fish;

// type guard function
function isDog(pet: Dog | Fish): pet is Dog {
  return "bark" in pet;
}

let Doggy: Dog = {
  legs: 4,
  bark: () => {
    console.log("bark");
  },
};

let Fishy: Fish = {
  fins: 2,
  swim: () => {
    console.log("swoosh");
  },
};

pet = Fishy;

// Перевіряємо, чи є наш вихованець собакою перед тим, як використовувати метод bark
if (isDog(pet)) {
  pet.bark(); // OK, тепер TypeScript знає, що pet - це Dog
} else {
  pet.swim(); // TypeScript знає, що якщо pet не Dog, то це має бути Fish
}

const button = document.querySelector("button");

button?.addEventListener("click", () => {
  console.log("clicked");
});
