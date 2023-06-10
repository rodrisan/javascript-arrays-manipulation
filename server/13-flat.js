const arrayOfArrays = [
  [1, 2, 3, [11, 12, 13]],
  [4, 5, 6],
  [7, 8, 9],
];

const newArray = [];

for (let i = 0; i < arrayOfArrays.length; i++) {
  const element = arrayOfArrays[i];
  for (let j = 0; j < element.length; j++) {
    const item = arrayOfArrays[i][j];
    newArray.push(item);
  }
}
console.log("for:", newArray);

const flat = arrayOfArrays.flat();
console.log("flat", flat);

const flatWithDepth = arrayOfArrays.flat(2);
console.log("flat with depth 2", flatWithDepth);
