//short-form conditional operator
var age = 19;
var isAdult = (age < 18) ? "Too young":"Old enough";
console.log(isAdult);
5 < 4 ? console.log("o1"):console.log("o2")

if (4 < 2){
  console.log("option 1");
}
else if(0 == true){
  console.log("option 2");
}
else {
  console.log("options 3");
}

//case statement
console.log("-----Case statement----");
num = 5
switch (num) {
  case 1:
    console.log("1");
    break;
  case 2:
    console.log("2");
    break;
  case 3:
    console.log("3")
    break;
  default:
    console.log("something else")
}
