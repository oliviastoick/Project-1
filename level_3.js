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


if (boxTop < -211) {
  alert('YOU LOSE :(') //location.reload()
}
if (boxLeft < -1) {
  alert('YOU LOSE :(')//location.reload()
}
if (boxTop > -190 && boxLeft > 11 && boxLeft < 290) {
  alert('YOU LOSE :(')//location.reload()
}
if (boxLeft > 308) {
  alert('YOU LOSE :(')//location.reload()
}
if (boxLeft > 295 && boxTop > -20) {
  alert('YOU WON!!')//location.reload()

      // banner.innerHTML = 'YOU WON!!!!!';
      //document.removeEventListener('keyup', game);
   }
window.reload

  $('#box').css({top: boxTop, left: boxLeft});
}
