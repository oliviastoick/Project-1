document.onkeydown = checkKey;
let box1 = document.getElementById('box')
// let cube = $('.cube');
//let cube = document.getElementByClassName('cube')
function cube( height, width) {
  let result={}
  result.height = height
  result.width = width
  return result
}
 let cube3 = cube( 15, 15)

 $('.cube').css(cube3)

function checkKey(z) {

  event   = z;
  keycode = event.keyCode;
  boxTop  = $('#box').position().top;
  boxLeft = $('#box').position().left;

  //move left
  if (keycode == '37') {
    boxLeft = boxLeft - 10;
     console.log(boxLeft)
  }
  //move right
  if (keycode == '39') {
   boxLeft = boxLeft + 10;
   console.log(boxLeft)
 }
 //move up
  if (keycode == '38') {
    boxTop = boxTop - 10;
    console.log(boxTop)
  }
  //move down
  if (keycode == '40') {
   boxTop = boxTop + 10;
   console.log(boxTop)
 }

//losing statements
if (boxTop < -211) {
  alert('YOU LOSE :(')
  location.reload()
}
if (boxLeft < -1) {
  alert('YOU LOSE :(')
  location.reload()
}
if (boxTop > -190 && boxLeft > 11 && boxLeft < 290) {
  alert('YOU LOSE :(')
  location.reload()
}
if (boxLeft > 308) {
  alert('YOU LOSE :(')
  location.reload()
}
//winning statement
if (boxLeft > 295 && boxTop > -20) {
  alert('YOU WON!! Continue onto the next page.')
  location.reload()

   }


  $('#box').css({top: boxTop, left: boxLeft});
}
