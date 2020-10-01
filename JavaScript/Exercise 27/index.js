"use strict";

let user={};
console.log(user);
console.log(typeof(user));

user.username="Batman";
user.password="hunter2";
console.log(user);
if(user.username=="Batman" && user.password=="******")
    alert("Access granted");
else
    alert("Access denied");

let user2={
    username:"Worderwoman",
    password:"123123",
    hello(){
        console.log(`Hello, I am ${this.username}`);
    },
    nameUpdate(newName){
        this.username=newName;
    }
}
user2.hello();
user2.nameUpdate("Thor");
user2.hello();