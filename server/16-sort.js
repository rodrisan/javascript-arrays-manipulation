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

// Sort by Date

const ordersWithDate = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
    date: new Date (2021, 3, 8, 4),
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
    date: new Date (2021, 9, 12, 3),
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
    date: new Date (2021, 8, 2, 2),
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9, 30),
  },
];
ordersWithDate.sort((a,b) => b.date - a.date);
console.log(ordersWithDate);