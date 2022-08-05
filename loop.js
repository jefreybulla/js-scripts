// The for loop has three statements
// You can add breaks and mofify the index inside the loop as well
// You skip on pass with 'continue'

console.log("using the three statements")
for(i=0;i<=3;i++){
  console.log(i);
}

console.log("using only the second statement")
var i = 0
for (;i<=3;){
  console.log(i);
  i++;
}

//while statement
i = 0
console.log("----------")
while(i<=3){
  console.log("Hi");
  i++;
}

//breaking out of the loop
console.log("--breaking out of the loop--")
var i = 0
for (;i<=3;){
  if(i==2){
    break;
  }
  console.log(i);
  i++;
}

//skipping one pass of the loop
console.log("--skipping one pass of the loop--")
for (i=0;i<=3;i++){
  if(i==2){
    continue;
  }
  console.log(i);
}
