import BuilderPerson from "./builder";

const empl = new BuilderPerson("Rabii Luena").makeManager(); // Should throw an error

const empl1 = new BuilderPerson("Person 2")
  .makeEmployee()
  .makeManager()
  .addBalance(250)
  .withCart(["Pinnaple", "Mango"]);

console.log(empl.isUserEmployee); // true
console.log(empl.isUserManager); // true
