//moving box with control pad
// document.onkeydown = key;

// function key(e) {

//   let event   = e || window.event;
//   let keycode = event.keyCode;
//   let boxTop  = $('#box').position().top;

//   let boxLeft = $('#box').position().left;

//   if (keycode == '37') {
//     boxLeft = boxLeft - 30;
//   }
//   if (keycode == '39') {
//     boxLeft = boxLeft + 30;
//   }
//   if (keycode == '38') {
//    boxTop = boxTop - 30;
//  }
//   if (keycode == '40') {
//    boxTop = boxTop + 30;
//  }
// }
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


if (boxLeft > 855) {
  alert('YAY YOU WON')
}
if (boxLeft < -1) {
  alert('YOU LOSE :(')
}
if (boxTop < -8) {
  alert('YOU LOSE :(')
}
if (boxTop > 38) {
  alert('YOU LOSE :(')
}
     // banner.innerHTML = 'YOU WON!!!!!';
      //document.removeEventListener('keyup', game);
window.reload

  $('#box').css({top: boxTop, left: boxLeft});
}


// let cube = document.getElementById('box');
// let cube1 = 0



// function key(event) {

//   let keyz = event.keyCode;

//   // let keycode = event.keyCode;
//   // let boxTop  = $('#box').position().top;

//   // let boxLeft = $('#box').position().left;

//   if (keyz == 37) {
//     cube.style.transform = `translateX(${cube1}px)`;
//     cube1 -= 30;
//   }
//    if (keyz == 38) {
//     cube.style.transform = `translateY(${cube1}px)`;
//     cube1 -= 30;
//   }
//    if (keyz == 39) {
//     cube.style.transform = `translateX(${cube1}px)`;
//     cube1 += 30;
//   }
//    if (keyz == 40) {
//     cube.style.transform = `translateY(${cube1}px)`;
//     cube1 += 30;
//   }
// levelComplete();

// }

// window.addEventListener('keydown',key)
// // $('#box').css({top: boxTop, left: boxLeft});
// //  }


// function levelComplete(){
//   if (cube1 + 25 === 1000) {
//     alert('You win!!!');
//   }
// }


// let box1 = document.getElementById('box');
// // check if player 1 won
//     if (box1.style.left > 823) {
//       alert('Player 1 wins!!!!!');

//     }

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
