//moving box with control pad
document.onkeydown = key;

function key(e) {

  let event   = e || window.event;
  let keycode = event.keyCode;
  let boxTop  = $('#box').position().top;

  let boxLeft = $('#box').position().left;

  if (keycode == '37') {
    boxLeft = boxLeft - 30;
  }
  if (keycode == '39') {
    boxLeft = boxLeft + 30;
  }
  if (keycode == '38') {
   boxTop = boxTop - 30;
 }
  if (keycode == '40') {
   boxTop = boxTop + 30;
 }

$('#box').css({top: boxTop, left: boxLeft});
}
let box1 = document.getElementById('box');
// check if player 1 won
    if (box1.style.left > 823) {
      alert('Player 1 wins!!!!!');

    }

//currently working on collision detection
// if (boxTop > 524) {
//   alert("YOU DIED")
// }
// if ($('#box') <= "501px") {
//   alert("YOU DIED")
// }
// if ($('#box') <= "415px") {
//   alert("YOU DIED")
// }
// if ($('#box') >= 825) {
//   alert("YOU WIN")
// }
