let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')
let secondHand = document.querySelector('#secondHand')

let audio = document.querySelector('#Audio')


let mom1 = document.querySelector('#mom1')
let mom2 = document.querySelector('#mom2')
let mom3 = document.querySelector('#mom3')
let mom4 = document.querySelector('#mom4')
let mom5 = document.querySelector('#mom5')
let mom6 = document.querySelector('#mom6')
let mom7 = document.querySelector('#mom7')
let mom8 = document.querySelector('#mom8')
let mom9 = document.querySelector('#mom9')
let mom10 = document.querySelector('#mom10')
let mom11 = document.querySelector('#mom11')




let seconds = 0
let minutes = 0


// run getTime once on load

getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);


// set up time getting function

function getTime(){
  
  seconds ++
  
if (seconds == 1   ) {
    mom2.classList.add ('hide');
    mom3.classList.add ('hide');
    mom4.classList.add ('hide');
    mom5.classList.add ('hide');
    mom6.classList.add ('hide');
    mom7.classList.add ('hide');
    mom8.classList.add ('hide');
    mom9.classList.add ('hide');
    mom10.classList.add ('hide');
    mom11.classList.add ('hide');

};
if (seconds > 2   ) {
    mom1.classList.add ('hide');

};
if (seconds <2 ){
   mom1.classList.remove ('hide');
}

if (seconds >5 ){
   mom2.classList.remove ('hide');
}
if (seconds >7){
   mom2.classList.add ('hide');
}

if (seconds >8 ){
   mom3.classList.remove ('hide');
}
if (seconds >10 ){
   mom3.classList.add('hide');
}



if (seconds >15 ){
   mom4.classList.remove ('hide');
}
if (seconds >17 ){
   mom4.classList.add ('hide');
}
if (seconds >18 ){
   mom5.classList.remove ('hide');
}
if (seconds >20 ){
   mom5.classList.add ('hide');
}


if (seconds >25 ){
   mom6.classList.remove ('hide');
}
if (seconds >27 ){
   mom6.classList.add ('hide');
}
if (seconds >28 ){
   mom7.classList.remove ('hide');
}
if (seconds >30 ){
   mom7.classList.add ('hide');
}

if (seconds >35 ){
   mom8.classList.remove ('hide');
}
if (seconds >37 ){
   mom8.classList.add ('hide');
}
if (seconds >38 ){
   mom9.classList.remove ('hide');
}
if (seconds >40 ){
   mom9.classList.add ('hide');
}

if (seconds >54 ){
   mom10.classList.remove ('hide');
}
if (seconds >56 ){
   mom10.classList.add ('hide');
}
if (seconds >57 ){
   mom11.classList.remove ('hide');
}
if (seconds >59 ){
   mom11.classList.add ('hide');
}


  








  if(seconds == 60){
    minutes ++
    seconds = 0

  }



  // get the date object
  
  let d = new Date();

  // get hours, minutes, and seconds from the date object
  
  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());

  // update the clock's text with our time vars


  let timeText = minutes + " minutes " + seconds + " seconds "
  timeEl.innerText = timeText

  // rotate secondHand based on the second value
  
  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6
  
  secondHand.style.transform = 'rotate('+ s * 6 +'deg)'  
  
  // detect if its a minute divisible by 5
  
  if(m % 5 == 0){
    clockEl.classList.add('aFiveMinute');
  } else {
    clockEl.classList.remove('aFiveMinute');
  }
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}