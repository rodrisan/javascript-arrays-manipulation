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

// Recursive solution

const arrayOfArrays2 = [
  [1, 2, 3, [11, 12, 13]],
  [4, 5, 6],
  [7, 8, 9],
];

const arrayFlatter = (array, returnArray = []) => {
  array.forEach((element) => {
    Array.isArray(element)
      ? arrayFlatter(element, returnArray)
      : returnArray.push(element);
  });
  return returnArray;

  // This works too.

  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
  //   if (Array.isArray(element)) {
  //     arrayFlatter(element, returnArray);
  //   } else {
  //     returnArray.push(element)
  //   }
  // }
  // return returnArray;

  // This works too.

  // array.forEach((element) => {
  //   if (Array.isArray(element)) {
  //     arrayFlatter(element, returnArray);
  //   } else {
  //     returnArray.push(element);
  //   }
  // });
  // return returnArray;
};
console.log("recursive array flatter", arrayFlatter(arrayOfArrays2));
