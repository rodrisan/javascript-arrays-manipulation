const users = [
  { userId: 1, username: "wet", attributes: ["Nice", "Cute"] },
  { userId: 2, username: "wwet", attributes: ["Lovely"] },
  { userId: 2, username: "zwet", attributes: ["Nice", "Cool"] },
];

const response1 = users.map((user) => user.attributes).flat();
const response2 = users.flatMap((user) => user.attributes);

console.log("response1 flat + map", response1);
console.log("response2    flatMap", response2);

const calendars = {
  primaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita 1",
    },
    {
      startDate: new Date(2021, 1, 1, 17),
      endDate: new Date(2021, 1, 1, 18),
      title: "Cita 2",
    },
  ],
  secondaryCalendar: [
    {
      startDate: new Date(2021, 1, 1, 12),
      endDate: new Date(2021, 1, 1, 12, 30),
      title: "Cita 2",
    },
    {
      startDate: new Date(2021, 1, 1, 9),
      endDate: new Date(2021, 1, 1, 10),
      title: "Cita 4",
    },
  ],
};

const response3 = Object.values(calendars).flatMap(
  (calendar, _index, _array) => {
    return calendar.map((item) => item.startDate);
  }
);
console.log("flatten objects array", response3);

// Test

const input = [
  "Beautiful is better than ugly",
  "Explicit is better than implicit",
  "Simple is better than complex",
  "Complex is better than complicated",
];

function countWords(array) {
  const result = array.flatMap((element) => element.split(" "));
  return Array(...result).length;
}
console.log("total words: ", countWords(input));
