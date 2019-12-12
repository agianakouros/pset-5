window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
}

const sayHello = function() {
  let text = "";

  let canvas1 = document.getElementById('student-canvas-1');
  let ctx1 = canvas1.getContext('2d');
  ctx1.clearRect(0, 0, 1024, 128);

    text = prompt("Message: ");
    if (text.length >= 50){
         alert("Your message is too long. Keep it under 50 characters.");
         text = prompt("Message: ");
       } else if (text === null) {
         ctx1 = canvas1.getContext('2d');
         ctx1.clearRect(0, 0, 1024, 128);
       }
       ctx1.font = '48px sans-serif';
       ctx1.clearRect(0, 0, 1024, 128);
       ctx1.strokeText(text, 30, 70);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {

  let canvas2 = document.getElementById('student-canvas-2');
  let ctx2 = canvas2.getContext('2d');
  ctx2.clearRect(0, 0, 1024, 128);

    let width = prompt("Width: ");
    let height = prompt("Height: ");
    let x = prompt("X: ");
    let y = prompt("Y: ");


    if (width < 0 || width > 1024 || (x + width) > 1024 )  {
         alert("Your width must be between 1 and 1024. ");
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

      else if (height < 0 || height > 512 || (y + height) > 512)  {
         alert("Your height must be between 1 and 512. ")
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

      else if (x < 0 || x > 1024 || (x + width) > 1024 )  {
         alert("Your x-coordinate must be between 1 and 1024. ")
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

      else if (y < 0 || y > 512 || (y + height) > 512)  {
         alert("Your y-coordinate must be between 1 and 512. ")
         width = prompt("Width: ");
         height = prompt("Height: ");
         x = prompt("X: ");
         y = prompt("Y: ");
       }

         ctx2.clearRect(0, 0, 1024, 512);
         ctx2.strokeRect(x, y, width, height);

};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {

  let canvas3 = document.getElementById('student-canvas-3');
  let ctx3 = canvas3.getContext('2d');

  ctx3.clearRect(0, 0, 1024, 512);

  let color = prompt("Color: ")
      color = color.toLowerCase();

  if (color === null){
    ctx3.clearRect(0, 0, 1024, 512);
  } else if (color !== "blue" && color !== "black" && color !== "green" && color !== "orange" && color !== "purple" && color !== "red" && color !== "yellow" ) {
    alert(color + " is not a supported color.")
    color = (prompt("Color: ")).toLowerCase();
  }

    ctx3.fillStyle = color;
    ctx3.fillRect(10, 10, 100, 50);

};

/*
 * Exercise 4.
 */

const drawTriangle = function() {

  let side1 = prompt("Side 1: ");
  let side2 = prompt("Side 2: ");
  let side3 = prompt("Side 3: ");

      let slant = Math.max(side1, side2, side3)
      let height = Math.min (side1, side2, side3)
      let base = Math.sqrt(slant*slant - height*height)

      if (base*base + height*height !== slant*slant || base == 0 || height == 0 || slant == 0  || side1+side2+side3-slant-height != base) {
          alert("That's not a valid right triangle.")
    } else if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
      alert("One of your sides is not a number.")
    } else if (base > 1024 || height > 512) {
      alert("Your triangle won't fit on the canvas.")
    }

    if ((base*base + height*height == slant*slant) && (base < 1024 && height < 512) && (base != 0 && height != 0 && slant != 0) && (base != null && height != null && slant != null)) {
        height = height + 25
        base = base + 25
        ctx4.beginPath();
        ctx4.moveTo(25, 25);
        ctx4.lineTo(25, height);
        ctx4.lineTo(base, height)
        ctx4.lineTo(25, 25)
        ctx4.stroke();
      };

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
