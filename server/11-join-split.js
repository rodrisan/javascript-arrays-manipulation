const elements = ["Fire", "Water", "Air", "Earth"];

// Join using for.
let concatenated = "";
let separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  concatenated += element;
  if (index < elements.length - 1) {
    concatenated += separator;
  }
}

console.log("for", concatenated);

// Join
const joined = elements.join("--");
console.log("for", joined);

// Split + Join

const title = "Array manipulation course";
const splited = title.split(" ");
const finalUrl = splited.join("-").toLowerCase();
console.log(finalUrl);
