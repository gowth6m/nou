$(window).scroll(function() {
    parallax();
  })
  
  function parallax() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position','left '+(wScroll*0.55)+'px')
  
    $('.parallax-bg2').css('background-position','center '+(wScroll*0.45)+'px')
  
    $('.parallax-bg3').css('letter-spacing' +(wScroll*0.8)+'px')
  
    $('.plax').css('transform', 'translate(0px,+'+(wScroll*0.85)+'px')
    $('.plax1').css('transform', 'translate(0px,+'+(wScroll*0.6)+'px')
    $('.plax2').css('transform', 'translate(0px,+'+(wScroll*0.1)+'px')
    $('.plax3').css('transform', 'translate(0px,+'+(wScroll*0.7)+'px')
    $('.plax4').css('transform', 'translate(0px,+'+(wScroll*1.7)+'px')
  }

//   ===================
//   CLOCK
//   ===================

// Set the date we're counting down to
var countDownDate = new Date("November 21, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "U CLOWN";
  }
}, 1000);

// NEW
let CLASS = {
  ROOT: 'c-shutter',
  OPENED: 'c-shutter--opened',
  OPENING: 'c-shutter--opening',
  CLOSED: 'c-shutter--closed',
  CLOSING: 'c-shutter--closing',
  ITEMS: 'c-shutter__slat'
 }
 
 class Shutter {
  constructor(dom) {
   this.state = false;
   this.container = dom;
  }
  
  open(){
   this.state = true;
   this.toggle(true);
  }
  close(){
   this.state = false;
   this.toggle(false);
  }
  
  toggle(visibility){
   this.container.classList.toggle(CLASS.OPENING, visibility);
   this.container.classList.toggle(CLASS.CLOSING, !visibility);
   
   setTimeout(() => {
    this.container.classList.remove(CLASS.OPENING);
    this.container.classList.remove(CLASS.CLOSING);
    this.container.classList.toggle(CLASS.OPENED, visibility);
    this.container.classList.toggle(CLASS.CLOSED, !visibility);
   }, 1999)
  }
  
  getState(){
   return this.state;
  }
 }
 
 const $shutter = document.querySelector('.c-shutter');
 
 let shutter = new Shutter($shutter);
 
 // Demo controls
//  let demoBtn = document.querySelector('.c-demo');
 let demoBtn = document.querySelector('.toggle-btn');
 
 demoBtn.addEventListener('click', () => {
  shutter.getState() ? shutter.close() : shutter.open();
 })
 
 // Force demo click
 
 var click = function (elem) {
   var evt = new MouseEvent('click', {
     bubbles: true,
     cancelable: true,
     view: window
   });
   elem.dispatchEvent(evt);
 };
 
 demoBtn.disabled = true;
 
 setTimeout(() => {
  demoBtn.disabled = false;
  click(demoBtn);
 
 }, 2000);
