const knop = document.getElementById("knop");
const restart = document.getElementById("restart");
const jijBent = document.getElementById("ik");
const knop2 = document.getElementById("knop2");
const anderIs = document.getElementById("ander");
const fightbutton = document.getElementById("fight");
let points = 0;
let points2 = 0;
restart.style.display = "none";
anderIs.style.display = "none";
restart.style.display = "none";
jijBent.style.display = "none";
fightbutton.style.display = "none";
restart.addEventListener("click", function() {
  location.reload();
});

//knop voor jou pokemon
knop.addEventListener("click", event => {
  knop.style.display = "none";

  getYourRandomPokemon().then(responseJSON => {
    const pokemon = responseJSON;
    getPokemon(pokemon);
    jijBent.style.display = "block";
  });

  const getPokemon = name => {
    const pokemonName = name.name;
    const naam = document.getElementById("naam");
    naam.innerHTML = pokemonName;
    const img = document.getElementById("img");
    img.innerHTML = `<img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.id}.png" height= "200px">`;
    points = parseInt(name.base_experience);
  };
});

//knop voor pokemon ander

knop2.addEventListener("click", event => {
  knop2.style.display = "none";

  getEnemyRandomPokemon().then(responseJSON => {
    const pokemon = responseJSON;
    getPokemon(pokemon);

    anderIs.style.display = "block";
    fightbutton.style.display = "block";
  });

  const getPokemon = name => {
    const pokemonName = name.name;
    const naam = document.getElementById("naam2");
    naam.innerHTML = pokemonName;
    const img = document.getElementById("img2");
    img.innerHTML = `<img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.id}.png" height= "200px">`;
    points2 = parseInt(name.base_experience);
  };
});

//fight Werkt niet :'(
//fightbutton.addEventListener("click", event => {
// getYourRandomPokemon().then(responseJSON => {
//   const pokemon = responseJSON;

//   const getPokemonPoints = points => {
//     points = parseInt(points.base_experience);
//     getPokemonPoints(pokemon);
//     console.log("hoi");
//   };

//   getEnemyRandomPokemon().then(responseJSON => {
//     const pokemon2 = responseJSON;

//     restart.style.display = "block";
//     const getPokemon2 = points2 => {
//       points2 = parseInt(points2.base_experience);
//       getPokemon2(pokemon2);
//       console.log(points, points2);
//       uitslag(points, points2);
//     };
//   });
// });
//});
fightbutton.addEventListener("click", event => {
  document.getElementById("uitslag");
  if (points < points2) {
    uitslag.innerHTML = `Helaas, je hebt verloren! Jouw pokémon had ${points} punten, en je tegenstander had er ${points2}!`;
  } else if (points == points2) {
    uitslag.innerHTML = `Gelijkspel! Beide pokémon hadden ${points} punten! `;
  } else {
    uitslag.innerHTML = `Hoera, je hebt gewonnen! Jouw pokémon had ${points} punten, en je tegenstander had er ${points2}! `;
  }
});
