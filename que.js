//ASSIGNMENTS
// let num = prompt("Enter a number");
// if(num % 10 === 0){
//     console.log("Good number");
// }else{
//     console.log("bad number");
// }

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let output = `${name} is of ${age} year old.`;
// alert(output);

// let ch = prompt("Enter a word");
// if ((ch[0] === 'A' || ch[0] === 'a') && ch.length > 5) {
//     console.log("Golden Word");
// } else {
//     console.log("Not a golden word");
// }

let month=["jan","jul","mar","aug"];
month.shift();
month.shift();
month.unshift("jun");
month.unshift("jul");
console.log(month);    //jul,jun,mar,aug

let month2=["jan","jul","mar","aug"];
month2.splice(0,2,"jul","jun");
console.log(month2);

//tik tak toe
let game = [['X',null,'O'],[null,'X','O'],['O',null,'X']];
game[0][0]='O';

//1 to 100
let randomm = Math.floor(Math.random()*100) +1 ;
console.log(randomm);

//Guessing Game
const max = prompt("Enetr the max number");
const random = Math.floor(Math.random()*max)+1 ;
let guess = prompt("Guess the number");
while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    if(guess == random){
        console.log("You are ringh! Congrats!!!");
        break;
    }else if(guess < random){
        guess = prompt(" Hint : Your guess was small. Please try again");
    }else{
        guess = prompt(" Hint : Your guess was larger. Please try agin!!");
    }
}