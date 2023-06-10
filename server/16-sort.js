// Sort

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log("months", months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort();
console.log("numbers original sort:", numbers);
numbers.sort((a, b) => a - b);
console.log("numbers sorting asc:  ", numbers);
numbers.sort((a, b) => b - a);
console.log("numbers sorting desc: ", numbers);

const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];
words.sort();
console.log("words: ", words);
words.sort((a, b) => a.localeCompare(b, "fr"));
console.log("words sorted with localCompare:", words);

const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
orders.sort();
console.log("orders", orders);
orders.sort((a, b) => b.total - a.total);
console.log("orders sorted by total desc", orders);
