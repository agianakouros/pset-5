window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
}

const sayHello = function() {
  let text = "";
    text = prompt("Message: ");
    if (text.length >= 50){
         alert("Your message is too long. Keep it under 50 characters.");
       }

      const canvas = document.getElementById('student-canvas-1');
    const ctx = canvas.getContext('2d');
    ctx.font = '48px sans-serif';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeText(text, 30, 70);
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    let width = prompt("Width: ");
    let height = prompt("Height: ");
    let x = prompt("X: ");
    let y = prompt("Y: ");


    if (width < 1 || width > canvas.width)  {
         alert("Your width must be between 1 and 1024. ");
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

      else if (height < 1 || height > canvas.height)  {
         alert("Your height must be between 1 and 512. ")
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

      else if (x < 1 || x > canvas.width)  {
         alert("Your x-coordinate must be between 1 and 1024. ")
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

      else if (y < 1 || y > canvas.height)  {
         alert("Your y-coordinate must be between 1 and 512. ")
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

         const canvas = document.getElementById('student-canvas-2');
         const ctx = canvas.getContext('2d');
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.strokeRect(x, y, width, height);

};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {

  let color = prompt("Color: ")
      color = color.toLowerCase();

  if (color !== "blue" && color !== "black" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow" &&) {
    alert(color + "is not a supported color.")
    color = (prompt("Color: ")).toLowerCase();
  }

  else {
    const canvas = document.getElementById('student-canvas-3');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 100, 50);
  }

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
