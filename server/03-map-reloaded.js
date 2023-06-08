const orders = [
  {
    customerName: "Rod",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Odr",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Dri",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Rig",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Igo",
    total: 50,
    delivered: true,
  },
  {
    customerName: "Rog",
    total: 50,
    delivered: true,
  },
];

console.log("original: ", orders);

const result1 = orders.map((item) => item.total);
console.log("result1: ", result1);

// This generates mutability.
// const result2 = orders.map(item => {
//   item.tax = .19;
//   return item;
// });
// console.log('original: ', orders);
// console.log('result2: ', result2);

// This copies the object content without altering the original.
const result3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log("original: ", orders);
console.log("result3: ", result3);

function addNewAttr(array) {
  return array.map((item) => {
    const baseTax = 0.19;
    return {
      ...item,
      taxes: Math.trunc(item.price * baseTax),
    };
  });
}

console.log(
  addNewAttr([
    {
      name: "Product 1",
      price: 1000,
      stock: 10,
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20,
    },
  ])
);
