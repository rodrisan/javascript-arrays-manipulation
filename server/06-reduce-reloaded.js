const items = [3, 3, 5, 3, 12, 5, 6, 2, 646, 7, 8, 8, 75, 64, 24];

const histogram = items.reduce((obj, element, index) => {
  if (!obj[element]) {
    obj[element] = 1;
  } else {
    obj[element]++;
  }
  // !obj[element] ? (obj[element] = 1) : obj[element]++; // Do the same.
  return obj;
}, {});
console.log(histogram);

// Advanced with Pipes
console.log("Advanced reduce using pipes");

const users = [
  {
    customerName: "Rod",
    level: "low",
  },
  {
    customerName: "Odr",
    level: "low",
  },
  {
    customerName: "Dri",
    level: "low",
  },
  {
    customerName: "Rig",
    level: "high",
  },
  {
    customerName: "Igo",
    level: "high",
  },
  {
    customerName: "Rog",
    level: "medium",
  },
];

const reduced = users
  .map((element) => element.level)
  .reduce((obj, element, index, array) => {
    console.log(array);
    if (!obj[element]) {
      obj[element] = 1;
    } else {
      obj[element]++;
    }
    return obj;
  }, {});
console.log("reduced: ", reduced);

// Task
console.log("Task: Filter using ranges");

const numbers = [
  1, 1, 1, 1, 2, 4, 3, 3, 4, 4, 3, 53, 5, 42, 4, 4, 34, 1, 1, 11, 1, 3, 1, 31,
  33, 1, 1, 13, 13, 4, 1, 4, 10, 17, 17, 16, 25, 25, 6, 63, 6, 3, 33, 22, 28,
  20, 32, 2, 4, 4, 35, 645, 567, 4334, 124, 42,
];

const range = numbers.reduce(
  (obj, element, index, array) => {
    if (element <= 5) obj["1-5"]++;
    else if (element <= 8) obj["6-8"]++;
    else if (element <= 10) obj["9-10"]++;
    else obj["+10"]++;

    return obj;
  },
  {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
    "+10": 0,
  }
);
console.log("range:", range);

function calcSum(numbers) {
  return numbers.reduce((sum, element) => sum + element, 0);
}
console.log(calcSum(items));