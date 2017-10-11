document.onkeydown = checkKey;
let box1 = document.getElementById('box')
let cube = $('.cube');
//let cube = document.getElementByClassName('cube')

function checkKey(e) {

  event   = e || window.event;
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


if (boxLeft > 534) {
  alert('YOU LOSE :(')
}
if (boxLeft < -1) {
  alert('YOU LOSE :(')
}
if (boxTop < -8) {
  alert('YOU LOSE :(')
}
if (boxTop > 38 && boxLeft < 490) {
  alert('YOU LOSE :(')
}
if (boxLeft > 490 && boxTop > 180) {
  alert('YOU WON!!')
}
     // banner.innerHTML = 'YOU WON!!!!!';
      //document.removeEventListener('keyup', game);
window.reload

  $('#box').css({top: boxTop, left: boxLeft});
}
