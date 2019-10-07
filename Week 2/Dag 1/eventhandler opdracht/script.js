document.addEventListener('DOMContentLoaded', function (event) {

const background= document.getElementById('background');

//dit doet het
const changeBackground = function(){
    background.classList.toggle("blue");
};
const h1 = document.querySelector("h1");
h1.onclick = changeBackground;


//dit ook, maar hoe gaat het weer weg als je niet meer hovert?
const logHover = function(){
    console.log('hover');
};
const div = document.querySelector(".tekst")
div.onmouseover = logHover;


/*werkt niet, maar kan de functie wel uitproberen met tekst in de DOM zelf
const logClear = function(){
    console.clear('hover');
};
div.onmouseout = logClear;
*/


//dit doet het wel, elke keer nieuw nummer. Maar waarom doet 'this' het wel
 //en 'button' niet? 
const button = document.querySelector(".knop")
button.onclick = function randomNumber(){
    this.innerHTML = Math.round(Math.random() * 100);
};

/* dit doet het half, niet elke keer nieuw nummer (want hij selecteert het nummer
    los van de knop functie.)
const randomNumber = Math.round(Math.random() * 100);
const randomNumberDisplay = function(){
    button.innerHTML= randomNumber;
    };
button.onclick = randomNumberDisplay;*/

const h2 = document.querySelector("h2");
h2.style.backgroundColor = "blue";
h2.style.fontWeight = "lighter";

h1.style.fontStyle = "italic";
});