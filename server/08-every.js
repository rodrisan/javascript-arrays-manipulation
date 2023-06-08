const numbers = [11, 28, 13, 14, 25, 46, 37, 48];

// Doing 'every' logic using for.
let response = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    response = false;
    break;
  }
}
console.log("response: ", response);

// Every

const areBigger = numbers.every((element, _index, _args) => element <= 40);
console.log("areBigger", areBigger);

// Task

const team = [
  {
    name: "Rod",
    age: 15,
  },
  {
    name: "Odr",
    age: 10,
  },
  {
    name: "Dri",
    age: 15,
  },
  {
    name: "Rig",
    age: 15,
  },
  {
    name: "Igo",
    age: 14,
  },
  {
    name: "Rog",
    age: 14,
  },
];

const teamValid = team.every((element, _index, _array) => element.age <= 15);
console.log("teamValid", teamValid);
