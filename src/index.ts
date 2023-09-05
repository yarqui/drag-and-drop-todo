interface Fish {
  type: "fish";
  swimmingSpeed: number;
}
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

type Animal = Fish | Bird;

const checkAnimalSpeed = (animal: Animal) => {
  let speed: number;

  switch (animal.type) {
    case "fish":
      speed = animal.swimmingSpeed;
      break;
    case "bird":
      speed = animal.flyingSpeed;
  }

  console.log(`The animal moves with the speed: ${speed} km/h`);
};

checkAnimalSpeed({ type: "bird", flyingSpeed: 6 });
