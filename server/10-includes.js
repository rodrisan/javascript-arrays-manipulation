const pets = ["dog", "cat", "bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}
console.log("includeInArray", includeInArray);

const includes = pets.includes("dog", 0);
console.log("includes", includes);

// Test

function filterByTerm(array, term) {
  return array.filter((word) => word.includes(term));
}
const array = ["ana", "santi", "nico", "anastasia"];
console.log(filterByTerm(array, "ana"));
