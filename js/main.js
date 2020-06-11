'use strict';
var multiItemSlider = (function () {
  return function (selector, config) {
    var
      _mainElement = document.querySelector(selector), // основный элемент блока
      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item
      _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)
      _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления
      _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка "LEFT"
      _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка "RIGHT"
      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента
      _positionLeftItem = 0, // позиция левого активного элемента
      _transform = 0, // значение транфсофрмации .slider_wrapper
      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
      _items = []; // массив элементов
    // наполнение массива _items
    _sliderItems.forEach(function (item, index) {
      _items.push({ item: item, position: index, transform: 0 });
    });

    var position = {
      getMin: 0,
      getMax: _items.length - 1,
    }

    var _transformItem = function (direction) {
      if (direction === 'right') {
        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {
          return;
        }
        if (!_sliderControlLeft.classList.contains('slider__control_show')) {
          _sliderControlLeft.classList.add('slider__control_show');
        }
        if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {
          _sliderControlRight.classList.remove('slider__control_show');
        }
        _positionLeftItem++;
        _transform -= _step;
      }
      if (direction === 'left') {
        if (_positionLeftItem <= position.getMin) {
          return;
        }
        if (!_sliderControlRight.classList.contains('slider__control_show')) {
          _sliderControlRight.classList.add('slider__control_show');
        }
        if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {
          _sliderControlLeft.classList.remove('slider__control_show');
        }
        _positionLeftItem--;
        _transform += _step;
      }
      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
    }

    var _controlClick = function (e) {
      if (e.target.classList.contains('slider__control')) {
        e.preventDefault();
        var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';
        _transformItem(direction);
      }
    };

    var _setUpListeners = function () {
      _sliderControls.forEach(function (item) {
        item.addEventListener('click', _controlClick);
      });
    }

    // инициализация
    _setUpListeners();

    return {
      right: function () { // метод right
        _transformItem('right');
      },
      left: function () { // метод left
        _transformItem('left');
      }
    }

  }
}());

var slider = multiItemSlider('.slider')

let circleAnimation = anime({
  targets: '.constellation1_1, .constellation1_2, .constellation1_3',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo'
})

// Счетчик с изменением цвета по клику
var onclickOnPlanet = 0
document.getElementById('button').onclick = changeColor
    function changeColor() {
      onclickOnPlanet++
      if (onclickOnPlanet % 2 === 0) {
        document.body.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        document.body.style.backgroundColor = 'white'
        document.body.style.transition = '1000ms'
      } else {
        document.body.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        document.body.style.backgroundColor = 'black'
        document.body.style.transition = '1000ms'
      }
    }
