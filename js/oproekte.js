// Счетчик с изменением цвета по клику
var buttonOnclick = 0
let first = document.getElementById("firstpage_block");
let second = document.getElementById("secondpage_block");
let third = document.getElementById("thirdpage_block");
document.getElementById('button').onclick = changeColor2
    function changeColor2() {
      buttonOnclick++
      if (buttonOnclick % 2 === 0) {
        first.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        first.style.backgroundColor = 'black'
        first.style.transition = '1000ms'
        third.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        third.style.backgroundColor = 'black'
        third.style.transition = '1000ms'
        second.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        second.style.backgroundColor = 'white'
        second.style.transition = '1000ms'
      } else {
        first.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        first.style.backgroundColor = 'black'
        first.style.transition = '1000ms'
        third.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        third.style.backgroundColor = 'black'
        third.style.transition = '1000ms'
        second.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        second.style.backgroundColor = 'white'
        second.style.transition = '1000ms'
      }
    }
