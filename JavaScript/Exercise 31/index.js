"use strict";

let movies=prompt("Enter 3 your favourite movies separated by comma");
movies=movies.split(",");
console.log(movies);

let msg=prompt("Enter a message that will be reversed");
function reverseString(message){
    message=message.split(" ");
    message=message.reverse();
    return message.join();
}
alert(reverseString(msg));