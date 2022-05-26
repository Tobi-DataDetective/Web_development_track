                        Data Types
1. String: "hello"
2. NUmbers: 123 
3. Boolean: True or False

typeof(123);
alert("hello");
alert(1+2);

                        Variables

prompt("what is your name?"); this allows the user to impute a text

var myName = "Angela"; saving the piece of data into a variable called myName
    myName = "Jane"; changing the variable 

Example:
        var myName = "Tobi";
        var yourName = prompt("what is your name?");
        alert("my name is" + myName + ", welcome to my course" + yourName);

Rules for naming variables

var myVar = "name";
var my_age = "name";
var myAge = "name";
var myAge$_ = "name";


            String Concatenation
"a" + "b" = "ab"

var yourName = prompt("what is your name?");
var greeting = "Hello there, ";
alert(greeting + yourName);


            String Length
var name= "Folayan";
name.length;

Exercise: create this message ===> you have written 182 characters, you have -42 characters left

var messageInput = prompt("Input your message");
var maxCharacters = 182;
var no_of_character= messageInput.length;
var no_left= maxCharacters-no_of_character;
var messageOutput = "you have written "+no_of_character+" characters, you have "+no_left+" characters left";
alert(messageOutput);

            Slicing

var name = "Angela";
name.slice(0,1);

var messageInput = prompt("Input your message");
var maxCharacters = 182;
var no_of_character= messageInput.length;
var no_left= maxCharacters-no_of_character;
var messageOutput = "you have written "+no_of_character+" characters, you have "+no_left+" characters left";
messageInput.slice(0,maxCharacters);


        Changing cases of string

var name = "Angela";
name = name.toUpperCase();
name = name.toLowerCase();

Exercise:

var name = prompt("what is your name?");
var nameLength = name.length;
// var otherCharacter = name.slice(1,nameLength+1);
// var firstCharacter = name.slice(0,1);
// firstCharacter = firstCharacter.toUpperCase()
// otherCharacter = otherCharacter.toLowerCase()
// var nameTransfromed = firstCharacter+otherCharacter
// var message = "hello "+ nameTransfromed;
// alert(message);s

alert("hello "+ name.slice(0,1).toUpperCase()+name.slice(1,nameLength+1).toLowerCase())

                Numbers

var dogAge = prompt("input dog age");
var humanAge = (dogAge - 2) * 4 + 21;
alert("human age = "+humanAge);

                Increments and Decrement Opereration

var x = 5;
x = x+1;
x++;
x-1;
x--;
x = x+2:
x+=2

var x = 3;
var y = x++;
y += 1;         Answer = 4


               
NB: alert vs prompt vs console.log


                Creating and Calling Functions

function getMilk(){

}
getMilk();

function moveFoutTimes() {
        move();
        move();
        move();
}

function main() {
        moveFourTimes();
        turnleft();
        moveFourTimes();
}

                Parameters and Arguments
function numberOfBottle(amount) {
    var bottles = Math.floor(amount / 5);
    var outputMessage = "Purchased "+bottles+" bottles";
    return outputMessage;
}

numberOfBottle(19);


                Returns and outputs
function numberOfBottle(amount, costPerBottle) {
    var remainder = Math.floor(amount % costPerBottle);
    return remainder;
}

var change = numberOfBottle(23,10);
console.log(change);


Exercise:

function bmiCalculator(weight, height){
        var bmi = weight / Math.pow(height,2);
        return Math.round(bmi);
}

var bmi = bmiCalculator(65,1.8);

console.log(bmi);