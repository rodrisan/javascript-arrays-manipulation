let products = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];
let extraProducts = null;

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(14));

const productIndex = products.findIndex((product) => product.id === "🍔");
if (productIndex) {
  myProducts.push(products[productIndex]);
  products.splice(productIndex, 1);
  extraProducts = [...products];
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(14));
console.log("extraProducts", extraProducts);

// Updating an element in an array.

let productsV2 = [
  { title: "Pizza", price: 121, id: "🍕" },
  { title: "Burger", price: 121, id: "🍔" },
  { title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
  id: "🥞",
  changes: {
    price: 202,
    description: "Super mega description",
  },
};

const productIndexV2 = productsV2.findIndex((item) => item.id === update.id);
productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes,
};

console.log("productsV2", productsV2);