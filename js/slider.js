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
  "Текст 1",
  "Текст 2",
  "Текст 3"
]

let planets = [
  { 
    img: "img/planet___.svg", 
    texts: ["Картинка 1, Текст 1", "Картинка 1, Текст 2", "Картинка 1, Текст 3", "Картинка 1, Текст 4", "Картинка 1, Текст 5"]
  },
  { 
    img: "img/planet___.svg", 
    texts: ["Картинка 2, Текст 1", "Картинка 2, Текст 2", "Картинка 2, Текст 3", "Картинка 2, Текст 4", "Картинка 2, Текст 5"]
  },
  { 
    img: "img/planet___.svg", 
    texts: ["Картинка 3, Текст 1", "Картинка 3, Текст 2", "Картинка 3, Текст 3", "Картинка 3, Текст 4", "Картинка 3, Текст 5"]
  },
  { 
    img: "img/planet___.svg", 
    texts: ["Картинка 4, Текст 1", "Картинка 3, Текст 2", "Картинка 3, Текст 3", "Картинка 3, Текст 4", "Картинка 3, Текст 5"]
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
  planet_img.style.backgroundImage = "url(" + planets[num].img + ")";
  toggleClass(planets_buttons, planets_buttons[num], "active");
  planet_text.innerHTML = planets[num].texts[0];
  toggleClass(underPlanets_buttons, underPlanets_buttons[0], "active");
}

prev_planet.onclick = () => {
  let num = parseInt(planet_img.getAttribute("num")) - 1;
  if (num < 0) 
    num = planets_buttons.length - 1;
  planet_img.setAttribute("num", num);
  planet_img.style.backgroundImage = "url(" + planets[num].img + ")";
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
    planet_img.style.backgroundImage = "url(" + planets[index].img + ")";
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
   });
});


// Initialization
output.innerHTML = slider.value;
toggleClass(planets_buttons, planets_buttons[0], "active");
planet_img.setAttribute("num", 0);
planet_img.style.backgroundImage = "url(" + planets[0].img + ")";
toggleClass(underPlanets_buttons, underPlanets_buttons[0], "active");
planet_text.innerHTML = planets[0].texts[0];