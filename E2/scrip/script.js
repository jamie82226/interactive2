let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");

element3.addEventListener("click", function() {
  element3.animate(
    [
      {
        opacity: 0,
        marginLeft: getComputedStyle(this).marginLeft,
        fontSize: "100px",
        borderWidth: getComputedStyle(this).borderWidth
      },
      {
        opacity: 0.4,
        marginLeft: "125px",
        fontSize: "24px",
        borderWidth: "10px"
      }
    ],
    {
      duration: 200,
      iterations: 1,
      fill: "forwards"
    }
  );
});

element6.addEventListener("pointermove", function(e) {
  var xPos = e.pageX - 125;
  var yPos = e.pageY - 125;

  this.style.position = "absolute";
  this.style.top = yPos + "px";
  this.style.left = xPos + "px";
});

element4.addEventListener("click", function() {
  this.classList.add("gradient-background");
});

element5.addEventListener("click", function() {
  this.nextElementSibling.classList.toggle("circle");
});
