const letters = ["x", "y", "z"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for: ", element);
}

letters.forEach(element => console.log("foreach: ", element));

letters.forEach((element, index, array) => {
  console.log(`element: ${element} - index: ${index} - array: ${array}`);
});
