for(i=0;i<=4;i++){
  console.log(i);
}

//For loop has three statements. You can add breaks and mofify th index inside the loop as well.
console.log("----------")
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
