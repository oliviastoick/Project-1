
document.onkeydown = checkKey;
let box1 = document.getElementById('box')
//let cube = $('.cube');
//let cube = document.getElementByClassName('cube')

function cube(id, height, width) {
  let result={}
  result.element = id
  result.height = height
  result.width = width
  return result
}
cube('cube', 15, 15)

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

//winning statement
if (boxLeft > 855) {
  alert('YAY YOU WON! Continue onto the next page')
}
//losing statements
if (boxLeft < -1) {
  alert('YOU LOSE :(')
  location.reload()
}
if (boxTop < -8) {
  alert('YOU LOSE :(')
  location.reload()
}
if (boxTop > 38) {
  alert('YOU LOSE :(')
  location.reload()
}


  $('#box').css({top: boxTop, left: boxLeft});
}


