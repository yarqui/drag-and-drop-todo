interface CourseGoal {
  title: string;
  description: string;
  validUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  date: Date
): CourseGoal => {
  let courseGoal: Partial<CourseGoal> = {}; // ❗ Partial tells us that this object can consist of properties from CourseGoal, but not necessarily all of them

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.validUntil = date;

  console.log("courseGoal:", courseGoal);
  return courseGoal as CourseGoal;
};
createCourseGoal(
  "Postgres",
  "introduction to SQL",
  new Date("December 17, 2023 03:24:00")
);

// ❗ use Readonly to mark an array or an object as a read only
const names: Readonly<string[]> = ["Yar", "Adam", "Ira"];
// names.push("Jose"); // ❌ TS yells "Property 'push' does not exist on type 'readonly string[]'"

type T0 = Extract<"a" | "b" | "c" | "f", "a" | "f">;
const thisType: T0 = "f";
console.log("thisType:", thisType);
