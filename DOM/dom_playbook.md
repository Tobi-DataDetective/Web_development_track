DOM = Document object model
document.firstElementChild.lastElementChild

<!-- Editing HTML with js -->
var heading = document.firstElementChild.lastElementChild
 heading.innerHTML = "good bye"
 heading.style.color = "red"

<!-- you could also make it do things -->
making a checkbox click= document.querySelector("input").click()

Objects can have properties and methods

Properties describe something about the object and the method is something the object can do.

Example of car prperties are:
colour, NUmber of doors, number of seats

Examples of car methods are:
brake(), drive(), park()

To use js to manipulate objects we use the dot notation e.g
car.colour; //red
car.numberOfDoors = 0;

for methods an example is
car.drive();

<!-- some HTML properties for a button  -->
innerHTML, style, firstChild

<!-- Some methods for a button are-->
click(), appendChild(), SetAttribute()


<!-- SELECTING ELEMENTS JS -->
----getElementsByTagName()    Produces an array 
document.getElementsByTagName("li");
document.getElementsByTagName("li")[2].style.color = "purple";
document.getElementsByTagName("li").length;

----getElementsByClassName()   Also produces an array
getElementsByClassName("btn");

---