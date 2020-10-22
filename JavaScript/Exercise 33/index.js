"use strict";

let nums=[1,2,3,4,5];
let squared=nums.map(nums=>nums**2);
console.log(nums);
console.log(squared);

let vals=[1,2,3,4,5,6,7,8,9,10];
let even=vals.filter(vals=>vals%2==0)
let odd=vals.filter(vals=>(vals%2!=0));
console.log(vals);
console.log(even);
console.log(odd);

let arOfObj=[
    {name:"Alex", age:26,city:"Winnipeg"},
    {name:"Gordon", age:30, city:"NY"},
    {name:"Ricky", age:25, city:"San Francisco"},
    {name:"Rita",age:17,city:"Moscow"},
    {name:"Rodger",age:40,city:"Madrid"},
    {name:"Johnson",age:27,city:"Saskatoon"}];
let ageAbove30=arOfObj.filter(arOfObj=>arOfObj.age>30);
let age20Saskatoon=arOfObj.filter(arOfObj=>arOfObj.age>20&&arOfObj.city==="Saskatoon");
let ages=arOfObj.map(arOfObj=>arOfObj.age);
console.log(ageAbove30)
console.log(age20Saskatoon);
console.log(ages);

//--------Bonus--------------------------------------------------
function stripVowels(str){
    let char=str.split("");
    let cosonants=char.filter(char=>((char!="a")&&(char!="o")&&(char!="u")&&(char!="e")&&(char!="i")&&(char!=" ")));
    return cosonants.join("");
}
console.log(stripVowels("The world is mine"));
console.log(stripVowels("My Bonney is over the ocean"));
console.log(stripVowels("Congratulations! It's a boy!"));