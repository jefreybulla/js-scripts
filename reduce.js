//.reduce saves data after each iteration

var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

//Goal: get total years of experience of all of them.
const totalYears = pilots.reduce( (accumulator, pilot) => accumulator + pilot.years, 0);   //0 is the starting value of the accumulator
console.log(totalYears);
