let clockEl = document.querySelector('#clock')
let secondHand = document.querySelector('#secondHand')
let secondHand2 = document.querySelector('#secondHand2')
let anxioustext = document.querySelector('#anxioustext')
let anxioustext2 = document.querySelector('#anxioustext2')
let anxioustext3 = document.querySelector('#anxioustext3')
let anxioustext4 = document.querySelector('#anxioustext4')
let anxioustext5 = document.querySelector('#anxioustext5')
let anxioustext6 = document.querySelector('#anxioustext6')
let anxioustext7 = document.querySelector('#anxioustext7')

// run getTime once on load

getTime();

// call getTime every 1 second

setInterval(function() {
  getTime();
}, 1000);




// set up time getting function

function getTime(){
  
  // get the date
  
  let d = new Date();

  // get hours, minutes, and seconds
  
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());

  // update the clock's text
  
  // let timeText = h + ":" + m + ":" + s
  // clockEl.innerText = timeText

  // rotate secondHand based on the second
    
  secondHand.animate([{
    transform:'rotate('+ (s-1) * 6 +'deg)'
  },
  {
    transform:'rotate('+ s * 6 +'deg)'
  }],{
    duration:100,
    easing:'cubic-bezier(0.75, 0.000, 0.800, 1.5)',
    fill:'forwards'
    
    
  })
  
  
  
  // detect a specific time
  
  if(s % 5 == 0){
     anxioustext.classList.toggle('hide')
  }
  
   if(s % 3 == 0){
     anxioustext2.classList.toggle('hide')
  }
  
  if(s % 6.5 == 0){
     anxioustext3.classList.toggle('hide')
  }
  
  if(s % 4.5 == 0){
     anxioustext4.classList.toggle('hide')
  }
  
  if(s % 7 == 0){
     anxioustext5.classList.toggle('hide')
  }
  
  if(s % 8 == 0){
     anxioustext6.classList.toggle('hide')
  }
   if(s % 5.75 == 0){
     anxioustext7.classList.toggle('hide')
  }
}




  



// add a zero to times below 10

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


