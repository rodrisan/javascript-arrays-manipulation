const letters = ["a", "b", "c"];

// Old way.

const newArray = [];
for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  newArray.push(element + "++");
}
console.log("original: ", letters);
console.log("newArray: ", newArray);

// Using map.

const mapArray = letters.map((element) => element + "++");
console.log("mapArray: ", newArray);

const complexMapArray = letters.map((element, index, _array) => {
  return element + index;
});
console.log("complexMapArray: ", complexMapArray);
