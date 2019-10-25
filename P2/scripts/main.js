let howOften = 80;
let redSquare = document.querySelector("#dave");
let blueSquare = document.querySelector("#larry");
let greenSquare = document.querySelector("#chad");


console.log(redSquare);

let timer;

let scale = 0;

let hue = 1;
let saturation = 1;
let luminosity = 1;






//red square control
redSquare.addEventListener("mouseenter", function() {
  redSquare.style.transform = "scale(1)";
  timer = setTimeout(checkHowLongRed, howOften);
});

redSquare.addEventListener("mouseleave", function() {
  clearTimeout(timer);
  redSquare.style.transform = "scale(1)";
  redSquare.nextElementSibling.classList.remove("circle");
});

function checkHowLongRed() {
  // scale += 0.02;
  saturation -= 0.01;

  // redSquare.style.background = "hsl(" + hue * 200 + ", "+saturation * 100 +"%, "+luminosity * 100 +"%)";
  // blueSquare.style.background = "hsl(" + hue * 200 + ", "+saturationBlue * 100 +"%, "+luminosity * 50 +"%)";
  blueSquare.style.background =
    "rgb(" +
    hue * 100 +
    ", " +
    saturation * 100 +
    ", " +
    luminosity * 100 +
    ")";

  // greenSquare.style.background = "hsl(" + hue * 200 + ", "+saturation * 100 +"%, "+luminosity * 50 +"%)";

  console.log(scale);
  timer = setTimeout(checkHowLongRed, howOften);
  //   ask will why (return function)
}

//blue square
blueSquare.addEventListener("mouseenter", function() {
  blueSquare.style.transform = "scale(1)";
  timer = setTimeout(checkHowLongBlue, howOften);
});

blueSquare.addEventListener("mouseleave", function() {
  clearTimeout(timer);
  blueSquare.style.transform = "scale(1)";
  // this.nextElementSibling.classList.remove("circle");
});

function checkHowLongBlue() {
  // scale += 0.02;
  luminosity -= 0.01;

  // redSquare.style.background = "hsl(" + hue * 200 + ", "+saturation * 100 +"%, "+luminosity * 50 +"%)";
  // blueSquare.style.background = "hsl(" + hue * 200 + ", "+saturation * 100 +"%, "+luminosity * 100 +"%)";
  // greenSquare.style.background = "hsl(" + hue * 200 + ", "+saturation * 100 +"%, "+luminosity * 50 +"%)";
  greenSquare.style.background =
    "rgb(" +
    hue * 100 +
    ", " +
    saturation * 100 +
    ", " +
    luminosity * 100 +
    ")";

  // console.log("hsl(" + scale * 360 + ", 100, 50)");

  // redSquare.style.transform = 'scale(' + scale + ')'
  console.log(scale);
  timer = setTimeout(checkHowLongBlue, howOften);
}

//green square
greenSquare.addEventListener("mouseenter", function() {
  greenSquare.style.transform = "scale(1)";
  timer = setTimeout(checkHowLongGreen, howOften);
});

greenSquare.addEventListener("mouseleave", function() {
  clearTimeout(timer);
  greenSquare.style.transform = "scale(1)";
  // this.nextElementSibling.classList.remove("circle");
});

function checkHowLongGreen() {
  // scale += 0.02;
  hue -= 0.01;

  // redSquare.style.background = "hsl(" + hue * 200 + ", "+saturation * 100 +"%, "+luminosity * 50 +"%)";
  redSquare.style.background =
    "rgb(" +
    hue * 100 +
    ", " +
    saturation * 100 +
    ", " +
    luminosity * 100 +
    ")";

  // console.log("hsl(" + scale * 360 + ", 100, 50)");

  // redSquare.style.transform = 'scale(' + scale + ')'
  console.log(scale);
  timer = setTimeout(checkHowLongGreen, howOften);
}
