const words = ["spray", "limit", "elite", "exuberant"];

console.log("Basic filtering");

// Filter using For.
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];
  if (element.length >= 6) {
    newArray.push(element);
  }
}

console.log("words", words);
console.log("newArray:", newArray);

// Filter using .filter()

const filteredWords = words.filter((element) => element.length >= 6);
console.log("words", words);
console.log("filteredWords:", filteredWords);

// A little more complex.
console.log("A little more complex filtering");

const orders = [
  {
    customerName: "Rod",
    total: 150,
    delivered: false,
  },
  {
    customerName: "Odr",
    total: 50,
    delivered: false,
  },
  {
    customerName: "Dri",
    total: 50,
    delivered: false,
  },
  {
    customerName: "Rig",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Igo",
    total: 120,
    delivered: true,
  },
  {
    customerName: "Rog",
    total: 1500,
    delivered: true,
  },
];

const deliveredOrders = orders.filter((element) => element.delivered);
console.log("orders: ", orders);
console.log("deliveredOrders: ", deliveredOrders);

const deliveredOrders2 = orders.filter(
  (element) => element.delivered && element.total > 100
);
console.log("orders: ", orders);
console.log("deliveredOrders2: ", deliveredOrders2);

// Searching
console.log("Search using filter");
const search = (query) => {
  return orders.filter((element) => {
    return element.customerName.toLowerCase().includes(query.toLowerCase());
  });
};
console.log(search("ro"));

// Test
function filterByLength(array) {
  return array.filter((element) => {
    return element.length >= 4;
  });
}
console.log(filterByLength(words));
