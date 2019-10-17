const randomPokemon1 = Math.floor(Math.random() * Math.floor(719));
const randomPokemon2 = Math.floor(Math.random() * Math.floor(719));

async function getYourRandomPokemon() {
  const randomPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemon1}/`;
  const result = await fetch(randomPokemonUrl, {
    method: "GET"
  }).then(response => response.json());
  return result;
}

async function getEnemyRandomPokemon() {
  const randomPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemon2}/`;
  const result = await fetch(randomPokemonUrl, {
    method: "GET"
  }).then(response => response.json());
  return result;
}
