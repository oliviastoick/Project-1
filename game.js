//moving box with control pad
document.onkeydown = key;

function key(e) {

  event   = e || window.event;
  keycode = event.keyCode;
  box_top  = $('#box').position().top;
  box_left = $('#box').position().left;

  if (keycode == '37') { boxLeft = box_left - 30; }
  if (keycode == '39') { boxLeft = box_left + 30; }
  if (keycode == '38') { boxTop = box_top - 30; }
  if (keycode == '40') { boxTop = box_top + 30; }

$('#box').css({top: boxTop, left: boxLeft});
}

//currently working on collision detection
if ($('box') == 524) {
  alert("YOU DIED")
}
if ($('box') == 501) {
  alert("YOU DIED")
}
if ($('box') == 415) {
  alert("YOU DIED")
}
if ($('box') == 825) {
  alert("YOU WIN")
}
