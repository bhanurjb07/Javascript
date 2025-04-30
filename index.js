console.log("Hellow");
let pencil= 10;
let pen= 20;
console.log("total price= ", pencil + pen, "rupees");
//let output = "total price = " + (pencil + pen) + "rupee";
//console.log(output);
let output =`total price = ${pencil + pen} rupees`;
console.log(output);
let num =0;
if(num){
    console.log("num is not zero");
}else{
    console.log("num is zero");
}
//alert("Hiii");
// console.error("it is a error");
// console.warn("it is a warning");
// var firstname = prompt("Enter name");
// console.log(firstname);
// let pss = prompt("Set password");
// let newpass =pss.trim();
// console.log(newpass);

// let msg = "Apna";
// let upp = msg.toLowerCase();
// console.log(upp);

// let msg = "Apnafgjoijg";
// let upp = msg.indexOf("oi");
// console.log(upp);

let msg = "ApnaCollegeisbest";
let newmsg = msg.trim();

let newwwmsg = newmsg.toUpperCase();
let newly = msg.trim().toUpperCase();
console.log(newwwmsg);
console.log(newly);
console.log(msg.slice(0,4));
console.log(msg.replace("A","O"));
console.log(msg.repeat(5));
let student11 = ["a","B","c"];
let nums =["2","4","6","8"];
let info =["Shradha",10,1.5];
console.log(info[0].length);
let empty=[];
let cars = ["audi", "toyota"];
console.log(cars.push("bmw")); // add at last 
console.log(cars.pop());     // delete from end
console.log(cars.unshift("bmw"));  // add to start
console.log(cars.shift());   //delete from starting
let color=["red","green","yellow","blue","black"];
console.log(color.indexOf("red"));
console.log(color.includes("red"));
let color2=["red","yeloow"];
console.log(color.concat(color2));
console.log(color2.reverse());
console.log(color.slice());
console.log(color.slice(2));
console.log(color.slice(2,3));
console.log(color.slice(-4));
console.log(cars);
console.log(cars.splice(0,1,"lambo"));
let numm=[[1,2],[3,4],[5,6]];
const student = {
    name :"Bhanu",
    age : 19,
    section : 7
};
student.name = "sachin";   //update
student.gender = "male";   //add
//object of object
const classinfo = {
    anam : {
        age  : 20,
        city : "Agra"
    },
    shradha : {
        age : 21,
        city : "Delhi"
    }
};
// array of object
const schinfo = [
    {
        name : "Guru",
        age : 12
    },
    {
        name : "Prabhu",
        age : 12
    }
];
//Functions
function helloe(){
    console.log("Hellow function");
}
helloe();
function printinfo(name,age){
    console.log(`${name}'s age is ${age}.`);
}
printinfo("Shradha",23); 
//return
function sum(a,b){
    return a+b;
}
console.log(sum(3,4));
console.log(sum(sum(2,5),5));