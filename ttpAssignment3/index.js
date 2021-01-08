//1) Select the section with an id of container without using querySelector.
const a = document.getElementById("container");
console.log(a);
//2) Select the section with an id of container using querySelector.
const b = document.querySelector("#container");
console.log(b);
//3) Select all of the list items with a class of "second".
const c = document.querySelectorAll(".second");
console.log(c);
//4) Select a list item with a class of third, but only the list item inside of the ol tag.
const d = document.querySelector("ol .third");
console.log(d);
//5) Give the section with an id of container the text "Hello!".
//const e = document.querySelector("#container");
//e.innerText = "Hello!";
//console.log(e);
//6) Add the class main to the div with a class of footer.
const f = document.querySelector(".footer");
f.classList.add("main");
console.log(f);
//7) Remove the class main on the div with a class of footer.
const g = document.querySelector(".footer");
g.classList.remove("main");
console.log(g);
//8) Create a new li element.
const h = document.createElement("li");
//9) Give the li the text "four".
h.innerText = "four";
console.log(h);
//10) Append the li to the ul element.
const ul = document.querySelector('ul');
ul.append(h);
//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const j = document.querySelectorAll("ol li");
for(let i = 0; i < j.length; i++) 
{
    j[i].style.backgroundColor = "green";
}
//13) Remove the div with a class of footer.
const k = document.querySelector(".footer");
k.remove();