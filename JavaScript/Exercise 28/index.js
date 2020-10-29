"use strict";

let characters=["Jerom K. Jerom", "Harris", "George", "Montmarency"];
let family=["Elena", "Vadim"];
characters=characters.concat(family);
characters.push("Varvara");
characters.reverse();
let name=characters[1];
characters[1]="Alexander";
for(let i=0;i<characters.length;i++){
    console.log(characters[i]);
}
for(let key of characters){
    console.log(key);
}

//EXTRA
function map(arr, func) {
    let res=[];
    for(let key of arr)
    {
        res.push(func(key));
    }
    return res;
  }
  
  const result = map([1, 2, 3], function(item) {
    return item * 2;
  });
  
  console.log(result); // [2, 4, 6]