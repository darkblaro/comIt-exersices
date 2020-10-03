"use strict";
//1
function showNumbers(){
    let result="";
    for(let i=1;i<100;i++){
        if(i%2==0)
            result+=String(i)+" ";
    }
    console.log(result);
}


//2
function showUser()
{
    let user={
            name:"Roman",
            age:36,
            phone:"1-204-666",
            postalCode:"R3Y XXX",
            married:false
    };
    let userStr=`Name: ${user.name}\nAge: ${user.age}\nPhone: ${user.phone}\nPostal Code: ${user.postalCode}\nMarried: ${user.married}`;
    console.log(userStr);
}


let evenNumber=showNumbers();
evenNumber;
evenNumber;
evenNumber;
evenNumber;
evenNumber;

let fibonacci=function(steps){
    let num1=0, num2=1, sum=0, s="0 1 ";  
    for (let i = 0; i < steps; i++)  
    { 
        sum=num1+num2; 
        num1=num2; 
        num2=sum;
        s+=String(sum)+" ";
    } 
    return s; 
}
console.log(fibonacci(10));

let showName=function(name){
    let myName="";
    for(let i=0;i<name.length+4;i++)
        myName+="=";
    myName+=`\n= ${name} =\n`;
    for(let k=0;k<name.length+4;k++)
        myName+="="
    console.log(myName);
}
showName("Roman");
showName("Christie");
showName("Anton");