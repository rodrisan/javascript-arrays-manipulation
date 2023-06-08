const numbers = [1, 30, 49, 29, 10, 13];

// Find using for.
let found = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    found = element;
  }
}
console.log("for simulating find", found);

// Find
const exists = numbers.find((element, _index, _array) => element === 30);
console.log("find", exists);

// Returning the first full object found.
// Returns undefined if not found
const products = [
  {
    name: "Pizza",
    price: 12,
    id: "🍕",
  },
  {
    name: "Burger",
    price: 23,
    id: "🍔",
  },
  {
    name: "Hot dog",
    price: 34,
    id: "🌭",
  },
  {
    name: "Hot cakes",
    price: 355,
    id: "🥞",
  },
];

const response = products.find((element) => element.id === "🍕");
console.log(response);

// Find Index
// Returns "-1" if not found

const responseIndex = products.findIndex((element) => element.id === "🍕");
console.log(responseIndex);
