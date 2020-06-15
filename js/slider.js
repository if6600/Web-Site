let slider = document.getElementById("sparkle_slider");
let output = document.getElementById("count");
let cost_button = document.getElementById("show_cost");
let cost_text = document.getElementById("cost_text");

let planets_buttons = document.getElementsByClassName("circle_planet");
let underPlanets_buttons = document.getElementsByClassName("circle_underplanet");
let planet_img = document.getElementById("page_pic");
let planet_text = document.getElementById("info_underplanet");

let prev_planet = document.getElementById("strelka");
let next_planet = document.getElementById("strelka2");

const toggleClass = (elemets, atciveElement, togClass) => {
    Array.prototype.forEach.call(elemets, (element) => {element.classList.remove(togClass)});
    atciveElement.classList.add(togClass);
}

let cost_texts = [
  "Звезда находится очень близко от нас, стоимость выйдет не дороже 2000 $",
  "Планета находится на среднем расстоянии, стоимость составит примерно 4000 $",
  "Находится в самой далекой части космоса, сумма может превышать 9000 $"
]

let planets = [
  {
    imgs: ["img/2page_pic4.svg", "img/2page_pic3.svg", "img/2page_pic.svg", "img/2page_pic2.svg", "img/2page_pic5.svg"],
    texts: ["Запылилась", "Заболела", "Треснула", "Побледнела", "Раскололась"]
  },
  {
    imgs: ["img/1page_pic4.svg", "img/1page_pic2.svg", "img/1page_pic.svg", "img/1page_pic3.svg", "img/1page_pic5.svg"],
    texts: ["Запылилась", "Заболела", "Треснула", "Побледнела", "Раскололась"]
  },
  {
    imgs: ["img/3page_pic2.svg", "img/3page_pic4.svg", "img/3page_pic1.svg", "img/3page_pic3.svg", "img/3page_pic5.svg"],
    texts: ["Запылилась", "Заболела", "Треснула", "Побледнела", "Раскололась"]
  },
  {
    imgs: ["img/4page_pic4.svg", "img/4page_pic3.svg", "img/4page_pic1.svg", "img/4page_pic2.svg", "img/4page_pic5.svg", ],
    texts: ["Запылилась", "Заболела", "Треснула", "Побледнела", "Раскололась"]
  },
];

slider.oninput = function() {
  output.innerHTML = this.value;
}

next_planet.onclick = () => {
  let num = parseInt(planet_img.getAttribute("num")) + 1;
  if (num === planets_buttons.length)
    num = 0;
  planet_img.setAttribute("num", num);
  planet_img.style.backgroundImage = "url(" + planets[num].imgs[0] + ")";
  toggleClass(planets_buttons, planets_buttons[num], "active");
  planet_text.innerHTML = planets[num].texts[0];
  toggleClass(underPlanets_buttons, underPlanets_buttons[0], "active");
}

prev_planet.onclick = () => {
  let num = parseInt(planet_img.getAttribute("num")) - 1;
  if (num < 0)
    num = planets_buttons.length - 1;
  planet_img.setAttribute("num", num);
  planet_img.style.backgroundImage = "url(" + planets[num].imgs[0] + ")";
  toggleClass(planets_buttons, planets_buttons[num], "active");
  planet_text.innerHTML = planets[num].texts[0];
  toggleClass(underPlanets_buttons, underPlanets_buttons[0], "active");
}

cost_button.onclick = () => {
  current_value = slider.value;
  if (current_value <= 10000)
    cost_text.innerHTML = cost_texts[0];
  if (current_value > 10000 && current_value <= 20000)
    cost_text.innerHTML = cost_texts[1];
  if (current_value > 20000 && current_value <= 30000)
    cost_text.innerHTML = cost_texts[2];
}

Array.prototype.forEach.call(planets_buttons, (planet_button, index) => {
  planet_button.addEventListener("click",  function() {
    planet_img.setAttribute("num", index);
    planet_img.style.backgroundImage = "url(" + planets[index].imgs[0] + ")";
    toggleClass(planets_buttons, planet_button, "active");

    planet_text.innerHTML = planets[index].texts[0];
    toggleClass(underPlanets_buttons, underPlanets_buttons[0], "active");
  });
});

Array.prototype.forEach.call(underPlanets_buttons, (underPlanets_button, index) => {
  underPlanets_button.addEventListener("click",  function() {
    let num = parseInt(planet_img.getAttribute("num"));
    planet_text.innerHTML = planets[num].texts[index];
    toggleClass(underPlanets_buttons, underPlanets_button, "active");
    planet_img.style.backgroundImage = "url(" + planets[num].imgs[index] + ")";
   });
});


// Initialization
output.innerHTML = slider.value;
toggleClass(planets_buttons, planets_buttons[0], "active");
planet_img.setAttribute("num", 0);
planet_img.style.backgroundImage = "url(" + planets[0].imgs[0] + ")";
toggleClass(underPlanets_buttons, underPlanets_buttons[0], "active");
planet_text.innerHTML = planets[0].texts[0];

// Счетчик с изменением цвета по клику
var buttonOnclick = 0
let first = document.getElementById("firstpage_block");
let second = document.getElementById("secondpage_block");
let third = document.getElementById("thirdpage_block");
document.getElementById('button1').onclick = changeColor2
    function changeColor2() {
      buttonOnclick++
      if (buttonOnclick % 2 === 0) {
        first.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        first.style.backgroundColor = 'white'
        first.style.transition = '1000ms'
        third.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        third.style.backgroundColor = 'white'
        third.style.transition = '1000ms'
        second.style.filter = 'invert(0%) sepia(0%) saturate(0%) hue-rotate(254deg) brightness(100%) contrast(100%)'
        second.style.backgroundColor = 'black'
        second.style.transition = '1000ms'
      } else {
        first.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        first.style.backgroundColor = 'white'
        first.style.transition = '1000ms'
        third.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        third.style.backgroundColor = 'white'
        third.style.transition = '1000ms'
        second.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(322deg) brightness(100%) contrast(100%)'
        second.style.backgroundColor = 'black'
        second.style.transition = '1000ms'
      }
    }
