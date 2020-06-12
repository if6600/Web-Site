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

let star1Animation1 = anime({
  targets: '#constellation1_1',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star1Animation2 = anime({
  targets: '#constellation1_2',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star1Animation3 = anime({
  targets: '#constellation1_3',
  scale: 1.5,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star2Animation1 = anime({
  targets: '#constellation2_1',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star2Animation2 = anime({
  targets: '#constellation2_2',
  scale: 1.5,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star2Animation3 = anime({
  targets: '#constellation2_3',
  scale: 1.5,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star2Animation4 = anime({
  targets: '#constellation2_4',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star3Animation1 = anime({
  targets: '#constellation3_1',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star3Animation2 = anime({
  targets: '#constellation3_2',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star3Animation3 = anime({
  targets: '#constellation3_3',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star3Animation4 = anime({
  targets: '#constellation3_4',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star4Animation1 = anime({
  targets: '#constellation4_1',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star4Animation2 = anime({
  targets: '#constellation4_2',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star4Animation3 = anime({
  targets: '#constellation4_3',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star4Animation4 = anime({
  targets: '#constellation4_4',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star5Animation1 = anime({
  targets: '#constellation5_1',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star5Animation2 = anime({
  targets: '#constellation5_2',
  scale: 1.7,
  rotate: {
    value: -180,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star5Animation3 = anime({
  targets: '#constellation5_3',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star6Animation1 = anime({
  targets: '#constellation6_1',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star6Animation2 = anime({
  targets: '#constellation6_2',
  scale: 1.7,
  rotate: {
    value: -180,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star6Animation3 = anime({
  targets: '#constellation6_3',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star7Animation1 = anime({
  targets: '#constellation7_1',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star7Animation2 = anime({
  targets: '#constellation7_2',
  scale: 1.7,
  rotate: {
    value: -205,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star7Animation3 = anime({
  targets: '#constellation7_3',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star7Animation4 = anime({
  targets: '#constellation7_4',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star7Animation5 = anime({
  targets: '#constellation7_5',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star8Animation1 = anime({
  targets: '#constellation8_1',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star8Animation2 = anime({
  targets: '#constellation8_2',
  scale: 1.7,
  rotate: {
    value: -90,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star8Animation3 = anime({
  targets: '#constellation8_3',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star9Animation1 = anime({
  targets: '#constellation9_1',
  scale: 1.7,
  rotate: {
    value: -180,
    duration: 1000,
    easing: 'easeInOutExpo'
  },
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star9Animation2 = anime({
  targets: '#constellation9_2',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
})

let star9Animation3 = anime({
  targets: '#constellation9_3',
  scale: 1.7,
  direction: 'alternate',
  duration: 1000,
  easing: 'easeInOutExpo',
  autoplay: false
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

            // Массив объектов. Каждый объект в массиве - звезда с ценой, массивом анимаций и селектором
            let stars = [
              {
                'info2': 'Светит ярче всех',
                'namestar': 'Алькор',
                'animations': [star1Animation1],
                'selector': '.constellation1_1'
              },
              {
                'info2': 'Горячая комета',
                'namestar': 'Андромеда',
                'animations': [star1Animation2],
                'selector': '.constellation1_2'
              },
              {
                'info2': 'Очень холодная',
                'namestar': 'Титавин',
                'animations': [star1Animation3],
                'selector': '.constellation1_3'
              },
              {
                'info2': 'Принимает разные формы',
                'namestar': 'Кастор',
                'animations': [star2Animation1],
                'selector': '.flower'
              },
              {
                'info2': 'Полярная звезда',
                'namestar': 'Поллукс',
                'animations': [star2Animation2],
                'selector': '.circlestar'
              },
              {
                'info2': 'Блестящая',
                'namestar': 'Альхена',
                'animations': [star2Animation3],
                'selector': '.sparkles_2page'
              },
              {
                'info2': 'Самая малая звезда космоса',
                'namestar': 'Мебсута',
                'animations': [star2Animation4],
                'selector': '.circlepage2'
              },
              {
                'info2': 'Выглядит как спутник',
                'namestar': 'Убхе',
                'animations': [star3Animation1],
                'selector': '.sputnuk'
              },
              {
                'info2': 'Имеет острые углы',
                'namestar': 'Альзир',
                'animations': [star3Animation2],
                'selector': '.sparkle_2page'
              },
              {
                'info2': 'Постоянно меняет свое местополежение',
                'namestar': 'Интеркрус',
                'animations': [star3Animation3],
                'selector': '.starwthcubes'
              },
              {
                'info2': 'Тепло-холодная',
                'namestar': 'Мицар',
                'animations': [star3Animation4],
                'selector': '.circleblackandwhite'
              },
              {
                'info2': 'Падающая звезда',
                'namestar': 'Алкаид',
                'animations': [star4Animation1],
                'selector': '.zvezda'
              },
              {
                'info2': 'Очень хрупкая',
                'namestar': 'Тания',
                'animations': [star4Animation2],
                'selector': '.sparkleincircle'
              },
              {
                'info2': 'Постоянно меняет цвет',
                'namestar': 'Новая Звезда',
                'animations': [star4Animation3],
                'selector': '.kvadrat'
              },
              {
                'info2': 'Иногда становится прозрачной',
                'namestar': 'Сириус',
                'animations': [star4Animation4],
                'selector': '.krestik_2page'
              },
              {
                'info2': 'Выполняет функцию ночника',
                'namestar': 'Адара',
                'animations': [star5Animation1],
                'selector': '.romb'
              },
              {
                'info2': 'Мягкая',
                'namestar': 'Исида',
                'animations': [star5Animation2],
                'selector': '.ellipse'
              },
              {
                'info2': 'Собирает частицы пыли',
                'namestar': 'Брахиум',
                'animations': [star5Animation3],
                'selector': '.triangle'
              },
              {
                'info2': 'Не видно ночью',
                'namestar': 'Садахбия',
                'animations': [star6Animation1],
                'selector': '.fillstar'
              },
              {
                'info2': 'Светит только днем',
                'namestar': 'Лэи',
                'animations': [star6Animation3],
                'selector': '.krestik_2page_2line'
              },
              {
                'info2': 'Бледное сияние',
                'namestar': 'Ситула',
                'animations': [star6Animation2],
                'selector': '.star_2page'
              },
              {
                'info2': 'Размером как планета',
                'namestar': 'Анха',
                'animations': [star7Animation1],
                'selector': '.blackcircles'
              },
              {
                'info2': 'Часто трескается',
                'namestar': 'Кластер',
                'animations': [star7Animation2],
                'selector': '.linestar'
              },
              {
                'info2': 'Умеет рассыпаться на мелкие частицы',
                'namestar': 'Менкалинан',
                'animations': [star7Animation3],
                'selector': '.blackellipse'
              },
              {
                'info2': 'Две сросшиеся звезды',
                'namestar': 'Хедус',
                'animations': [star7Animation4],
                'selector': '.twocircles'
              },
              {
                'info2': 'Оставляет за собой светящийся след',
                'namestar': 'Кастула',
                'animations': [star7Animation5],
                'selector': '.strway'
              },
              {
                'info2': 'Умеет менять свой размер',
                'namestar': 'Прайя',
                'animations': [star8Animation1],
                'selector': '.trianglestar'
              },
              {
                'info2': 'Сложно поймать',
                'namestar': 'Неккар',
                'animations': [star8Animation2],
                'selector': '.sparkincirc2'
              },
              {
                'info2': 'Собирает частицы звезд',
                'namestar': 'Огма',
                'animations': [star8Animation3],
                'selector': '.trianglewithfill'
              },
              {
                'info2': 'Больная звезда',
                'namestar': 'Минхир',
                'animations': [star9Animation1],
                'selector': '.str_2page_3line'
              },
              {
                'info2': 'Можно купить только кусочек',
                'namestar': 'Поррима',
                'animations': [star9Animation2],
                'selector': '.bigplanet'
              },
              {
                'info2': 'Растущая луна',
                'namestar': 'Авиор',
                'animations': [star9Animation3],
                'selector': '.moon'
              }
            ]

          // Цикл по массиву звезд
          stars.forEach((item_g) => {
            let complex_stars = Array.from(document.querySelectorAll(item_g['selector']));
            let namestar = document.getElementById('namestar');
            let info2 = document.getElementById('info2');
            // Цикл по примитивам, составляющим звезду
            complex_stars.forEach((item_l, i_l) => {
              item_l.addEventListener('click', () => {
                namestar.textContent = item_g['namestar']; // Вывод цены
                info2.textContent = item_g['info2'];
                item_g['animations'].map((animation) => animation.play()); // Инициализация анимаций примитивов
              });
            });

            // Цикл по примитивам, составляющим звезду
            complex_stars.forEach((item_l2) => {
              item_l2.addEventListener('dblclick', () => {
                namestar.textContent = '';
                item_g['animations'].map((animation) => {animation.seek(0); animation.pause();});
              });
            });

            });
