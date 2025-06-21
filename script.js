// Events

// Events can make changes to the DOM dynamically or on demand
// Events are actions that occur on webpages, such as mouse clicks or key presses
// Javascript can be used to make the webpage "listen" to and react to these events

// Three ways to do this:
// Specify function attibutes directly in the HTML elements
// Set properties on the DOM noes in javascript (onclick , onmousedown, etc)
// Attach event listeners to the DOM nodes in javascript

// Method 2: Set Property in JS File
const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World!");

// Method 3: Event Listener
const bestBtn = document.querySelector("#bestBtn");
bestBtn.addEventListener("click", () => {
  alert("Hello World!");
});

// All 3 methods can also be used with named functions:

// Method 2:
/*

    function alertFunction()  {
        alert("Hello World!");
    }

    const btn.document.querySelector("#btn");
    btn.onclick = alertFunction;

*/

// Method 3:
/*

    function alertFunction()  {
        alert("Hello World!");
    }

    const bestBtn = document.querySelector("#bestBtn");
    bestBtn.addEventListener("click", alertFunction);

*/

// Callbacks

// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

btn.addEventListener("click", function (e) {
  console.log(e); // Provides information about that events target (DOM node)
});

btn.addEventListener("click", function (e) {
  console.log(e.target); // <button id="btn">Click Me</button>
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue"; // <button id="btn" style="background: blue;">Click Me</button> (changed the button background to blue)
});

// Attaching listeners to groups of nodes
const buttons = document.querySelectorAll(".num");

// .forEach iterates through all elements with class of "num"
buttons.forEach((button) => {
  // For each element we add a click listener
  button.addEventListener("click", () => {
    alert(button.id); // alert pop up with the name of the elements id
  });
});
