"use strict";

function testLet() {
    let a = 50;
    if (true) {
        let a = 10;
        console.log(a);
    }
    console.log(a);
};
function testVar() {
    var a = 50;
    if (true) {
        var a = 10;
        console.log(a);
    }
    console.log(a);
};
testLet();
testVar();


// let args = [1,2,3]
// let args2 = [...args,4];
// console.log(args2);
// function displayArray(args2){
//     for(let x of args2){
//         console.log(x);
//     }   
// }
// displayArray(args2);


// let jssession = {
//     topic : 'es2015',
//     venue : 'EGL',
// }
// var {topic,venue} = jssession;
// console.log("Topic is " + topic + " Venue is " + venue);
// let myarray = [1,2,3,4];
// function destructthis([first,second,...remaining]){
//     console.log(first);
// }
// destructthis(myarray);


function startGame(){ 
    this.lives = 0;
    this.addLives = function() {
       this.oneUp = setTimeout(function(){
            this.lives +=1;
            console.log("value in oneUp: "+ this.lives);
        })
    }
}
var ninja = new startGame();
ninja.addLives();


class employee{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    static getCount(){
       console.log("there are 2 employees");
    };
    getName(){
        console.log("Employee name is " + this.name);
    }
};
 class engineer extends employee{
     constructor(name,age,designation){
         super(name,age);
         this.designation = designation;
     }
     getDesignation(){
         console.log(this.name + '`s designation is ' + this.designation);
     }
 }
let ramesh= new employee('Ramesh','25');
ramesh.getName();
let suresh = new engineer('Suresh', '25', 'Engineer');
suresh.getDesignation();
suresh.getName();
employee.getCount();



var p = new Promise(function (resolve, reject) {
    let i = 1;
    if (i === 1) {
        setTimeout(() => {
            i = 5
            resolve(i);
        }, 3000);
    }
    else {
        reject("rejected");
    }
});
p.then((value) => console.log(value), (error) => console.log(error));



// import "babel-polyfill";
// function *mygenerator(){
//     let i = 0;
//     yield ++i;
//     yield ++i;
//     return ++i;
// }
// var genobject = mygenerator();
// console.log(genobject.next());
// console.log(genobject.next());
// console.log(genobject.next());


let session = 'BDot.net'
function lowercase(word){
    return word.toLowerCase();
};
let template = `lowercase("HELLO") this
is an example of template string is session`
console.log(template);