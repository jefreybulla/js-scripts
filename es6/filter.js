//.filter returns an array based on specific conditions

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

//Goal: create two arrays: one for rebel pilots, the other one for imperials

const rebels = pilots.filter(pilot => pilot.faction === "Rebels");
const empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(`Rebels: ${rebels.map(pilot => pilot.name)}`);
console.log(`Empire: ${empire.map(pilot => pilot.name)}`);
