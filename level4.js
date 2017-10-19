 document.onkeydown = checkKey;
 let box1 = document.getElementById('box')
 //let cube = $('.cube');
//let cube = document.getElementByClassName('cube')
function cube( height, width) {
  let result={}
  result.height = height
  result.width = width
  return result
}
 let cube4 = cube( 15, 15)

 $('.cube3').css(cube4)


function checkKey(z) {

  event   = z
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

//Losing Statements
if (boxTop > 10) {
  alert('YOU LOSE:(')
  location.reload()
}
if (boxLeft < -1) {
  alert('YOU LOSE :(')
  location.reload()
}
if (boxTop < -212) {
   alert('YOU LOSE :(')
   location.reload()
   }
 if (boxLeft > 20 && boxLeft < 99 && boxTop > -196) {
   alert('YOU LOSE :(')
   location.reload()
   }
 if (boxLeft > 110 && boxLeft < 208 && boxTop > -120) {
   alert('YOU LOSE:(')
   location.reload()
  }
  if (boxLeft > 110 && boxLeft < 208 && boxTop < -130) {
   alert('YOU LOSE:(')
   location.reload()
  }
  if (boxLeft> 220) {
    alert('YOU LOSE:(')
    location.reload()
  }
  //Winning Statements
  if (boxLeft > 205 && boxTop < -185) {
    alert ('YOU WIN!! Continue onto the next page.')
  }

  $('#box').css({top: boxTop, left: boxLeft});
}
