const totals = [43, 532, 46755, 64];

// 'Reduce' using for.
let sum = 0;
for (let index = 0; index < totals.length; index++) {
  sum += totals[index];
}
console.log("totals", totals);
console.log("sum", sum);

const bigTotal = totals.reduce((sum, element) => sum + element, 0);
console.log("bigTotal", bigTotal);

const bigTotal2 = totals.reduce(
  (sum, element, index, array) => (sum + element) * index - array[index],
  0
);
console.log("bigTotal2", bigTotal2);
