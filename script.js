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
