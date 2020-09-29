"use strict";
let sum=0;
for(let i=1;i<=1000;i++)
{
    if(sum>=400)
        break;
    sum+=i+1;
}
console.log(sum);

//Show numbers from 0 to 10
let k=1;
while(k<=10)
{
    console.log(k);
    k++;
}
//Show numbers from 100 to 0
let steps=100;
do{
    console.log(steps);
    steps--;
}while(steps>0);

//Show even numbers between 0 and 100
let result="";
for(let i=0;i<=100;i++)
{
    if(i%2==0)
        result+=String(i)+" ";
}
console.log(result);

//triangle

let tri="";
for(let lineNumber=0;lineNumber<13;lineNumber++)
{
  for(let stars=0;stars<lineNumber;stars++){
    tri+="*";
  }
  tri+="\n";
}
console.log(tri);