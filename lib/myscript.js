"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function testLet() {
    var a = 50;
    if (true) {
        var _a = 10;
        console.log(_a);
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


function startGame() {
    this.lives = 0;
    this.addLives = function () {
        this.oneUp = setTimeout(function () {
            this.lives += 1;
            console.log("value in oneUp: " + this.lives);
        });
    };
}
var ninja = new startGame();
ninja.addLives();

var employee = function () {
    function employee(name, age) {
        _classCallCheck(this, employee);

        this.name = name;
        this.age = age;
    }

    _createClass(employee, [{
        key: "getName",
        value: function getName() {
            console.log("Employee name is " + this.name);
        }
    }], [{
        key: "getCount",
        value: function getCount() {
            console.log("there are 2 employees");
        }
    }]);

    return employee;
}();

;

var engineer = function (_employee) {
    _inherits(engineer, _employee);

    function engineer(name, age, designation) {
        _classCallCheck(this, engineer);

        var _this = _possibleConstructorReturn(this, (engineer.__proto__ || Object.getPrototypeOf(engineer)).call(this, name, age));

        _this.designation = designation;
        return _this;
    }

    _createClass(engineer, [{
        key: "getDesignation",
        value: function getDesignation() {
            console.log(this.name + '`s designation is ' + this.designation);
        }
    }]);

    return engineer;
}(employee);

var ramesh = new employee('Ramesh', '25');
ramesh.getName();
var suresh = new engineer('Suresh', '25', 'Engineer');
suresh.getDesignation();
suresh.getName();
employee.getCount();

var p = new Promise(function (resolve, reject) {
    var i = 1;
    if (i === 1) {
        setTimeout(function () {
            i = 5;
            resolve(i);
        }, 3000);
    } else {
        reject("rejected");
    }
});
p.then(function (value) {
    return console.log(value);
}, function (error) {
    return console.log(error);
});

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


var session = 'BDot.net';
function lowercase(word) {
    return word.toLowerCase();
};
var template = "lowercase(\"HELLO\") this\nis an example of template string is session";
console.log(template);