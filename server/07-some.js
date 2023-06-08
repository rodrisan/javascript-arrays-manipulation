const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// Doing 'some' logic using for.
let response = false;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element % 2 === 0) {
    response = true;
    break;
  }
}
console.log("response: ", response);

// Some
const isOdd = numbers.some((element, _index, _array) => element % 2 === 0);
console.log("isOdd", isOdd);

// Using Objects

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
const delivered = orders.some(
  (element, _index, _array) => element.delivered === true
);
console.log("delivered", delivered);

// Using dates
const dates = [
  {
    startDate: new Date(2020, 1, 1, 8),
    endDate: new Date(2021, 2, 2, 9),
    title: "Appoinment one",
  },
  {
    startDate: new Date(2020, 2, 1, 9),
    endDate: new Date(2021, 2, 1, 10),
    title: "Appoinment two",
  },
  {
    startDate: new Date(2021, 2, 2, 10),
    endDate: new Date(2022, 2, 3, 13),
    title: "Appoinment three",
  },
  {
    startDate: new Date(2022, 2, 4, 11),
    endDate: new Date(2022, 6, 5, 12),
    title: "Appoinment four",
  },
  {
    startDate: new Date(2023, 2, 5, 13),
    endDate: new Date(2023, 6, 8, 18),
    title: "Appoinment five",
  },
];

const newAppointment = {
  startDate: new Date(2023, 6, 8, 13),
  endDate: new Date(2023, 6, 8, 14, 30),
};

const areIntervalsOverlapping = require("date-fns/areIntervalsOverlapping");

const isOverlap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      { start: date.startDate, end: date.endDate },
      { start: newDate.startDate, end: newDate.endDate }
    );
  });
};
console.log("isOverlap", isOverlap(newAppointment));

// Test

function checkArray(numbers) {
  return numbers.some((element) => element % 2 === 0);
}
console.log('checkArray', checkArray(numbers));