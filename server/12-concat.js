const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

// Concat using for.

let newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
  const element = otherElements[index];
  newArray.push(element);
}
console.log("for ", newArray);

// Concat

const concatenated = elements.concat(otherElements);
const response = [...elements, ...otherElements];
const response2 = [...elements, "random"];
const response3 = [...elements, ..."random"];
console.log("concat 1", concatenated);
console.log("concat ...", response);
console.log("concat ... with string", response2);
console.log("concat ... with ... string", response3);

elements.push(...otherElements);
console.log("elements", elements);

// If we are using an array of objects:
const objectsArray = [
  {
    1: "1",
    2: "2",
    3: "3",
  },
  {
    4: "1",
    5: "2",
    6: "3",
  },
];

const newArray2 = objectsArray.map((a) => ({ ...a }));
console.log("array original", objectsArray);
console.log("array copied", newArray2);
console.log("array equals?", newArray2 === objectsArray);
