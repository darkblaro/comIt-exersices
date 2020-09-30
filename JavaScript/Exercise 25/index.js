"use strict";

let weekDay=Number(prompt("Enter a week day number"));
if(weekDay<1 || weekDay>7)
    console.log("Your input is wrong");
if(weekDay==1)
    console.log("Today is Monday");
if(weekDay==2)
    console.log("Today is Tuesday");
if(weekDay==3)
    console.log("Today is Wednesday");
if(weekDay==4)
    console.log("Today is Thurday");
if(weekDay==5)
    console.log("Today is Friday");
if(weekDay==6)
    console.log("Today is Saturday");
if(weekDay==7)
    console.log("Today is Sunday");

switch(weekDay)
{
    case 1: console.log("Today is Monday");
        break;
    case 2: console.log("Today is Tuesday");
        break;
    case 3: console.log("Today is Wednesday");
        break;
    case 4: console.log("Today is Thursday");
        break;
    case 5: console.log("Today is Friday");
        break;
    case 6: console.log("Today is Saturday");
        break;
    case 7: console.log("Today is Sunday");
        break;
    default: console.log("Your input is wrong!");
        break;
}

//After refactoring
let msg="Today is ";
switch(weekDay)
{
    case 1: msg+="Monday";
        break;
    case 2: msg+="Tuesday";
        break;
    case 3: msg+="Wednesday";
        break;
    case 4: msg+="Thursday";
        break;
    case 5: msg+="Friday";
        break;
    case 6: msg+="Saturday";
        break;
    case 7: msg+="Sunday";
        break;
    default: msg="Your input is wrong!";
        break;
}
console.log(msg);