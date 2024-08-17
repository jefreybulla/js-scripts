//.map method goes over each element of an array and execute a desired code

// What you have
const officers = [
  { id: 20, name: 'Captain Piett' },
  { id: 24, name: 'General Veers' },
  { id: 56, name: 'Admiral Ozzel' },
  { id: 88, name: 'Commander Jerjerrod' }
];

console.log(officers);
console.log(officers[0])
console.log(officers[0].name)

// Goal: get the ids only [20, 24, 56, 88]

//option 1: each
const officersIds = [];
officers.forEach(function (officer) {
  officersIds.push(officer.id);
});
console.log(officersIds);

//using .map does not require to create an empy array
const officersIds2 = officers.map(officer => officer.id);
console.log(officersIds2);

a = [1,2,3];
b = a.map(number => number*3);
console.log(b);
