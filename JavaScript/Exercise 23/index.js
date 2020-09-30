"use strict";
let a=prompt("Enter current hour (0-23)");

if(a<0 || a>23)
    alert("Your input is incorrect");
else if(a<8 || a>18)
    alert("We are close");
else if(a>=8 && a<18)
    alert("We are open");