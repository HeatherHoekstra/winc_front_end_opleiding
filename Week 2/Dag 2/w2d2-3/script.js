const superheroes = [
    {
      "name": "Batman",
      "publisher": "DC Comics",
      "alter_ego": "Bruce Wayne",
      "first_appearance": "Detective Comics #27",
      "weight": "210"
    },
    {
      "name": "Superman",
      "publisher": "DC Comics",
      "alter_ego": "Kal-El",
      "first_appearance": "Action Comics #1",
      "weight": "220"
    },
    {
      "name": "Flash",
      "publisher": "DC Comics",
      "alter_ego": "Jay Garrick",
      "first_appearance": "Flash Comics #1",
      "weight": "195"
    },
    {
      "name": "Green Lantern",
      "publisher": "DC Comics",
      "alter_ego": "Alan Scott",
      "first_appearance": "All-American Comics #16",
      "weight": "186"
    },
    {
      "name": "Green Arrow",
      "publisher": "DC Comics",
      "alter_ego": "Oliver Queen",
      "weight": "195"
    },
    {
      "name": "Wonder Woman",
      "publisher": "DC Comics",
      "alter_ego": "Princess Diana",
      "weight": "165"
    },
    {
      "name": "Blue Beetle",
      "publisher": "DC Comics",
      "alter_ego": "Dan Garret",
      "first_appearance": "Mystery Men Comics #1",
      "weight": "145"
  },
  {
      "name": "Spider Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Peter Parker",
      "first_appearance": "Amazing Fantasy #15",
      "weight": "167"
  },
  {
      "name": "Captain America",
      "publisher": "Marvel Comics",
      "alter_ego": "Steve Rogers",
      "first_appearance": "Captain America Comics #1",
      "weight": "220"
  },
  {
      "name": "Iron Man",
      "publisher": "Marvel Comics",
      "alter_ego": "Tony Stark",
      "first_appearance": "Tales of Suspense #39",
      "weight": "250"
  },
  {
      "name": "Thor",
      "publisher": "Marvel Comics",
      "alter_ego": "Thor Odinson",
      "first_appearance": "Journey into Myster #83",
      "weight": "200"
  },
  {
      "name": "Hulk",
      "publisher": "Marvel Comics",
      "alter_ego": "Bruce Banner",
      "first_appearance": "The Incredible Hulk #1",
      "weight": "1400"
  },
  {
      "name": "Wolverine",
      "publisher": "Marvel Comics",
      "alter_ego": "James Howlett",
      "first_appearance": "The Incredible Hulk #180",
      "weight": "200"
  },
  {
      "name": "Daredevil",
      "publisher": "Marvel Comics",
      "alter_ego": "Matthew Michael Murdock",
      "first_appearance": "Daredevil #1",
      "weight": "200"
  },
  {
      "name": "Silver Surfer",
      "publisher": "Marvel Comics",
      "alter_ego": "Norrin Radd",
      "first_appearance": "The Fantastic Four #48",
      "weight": "unknown"
    }
  ];



const superheroNames = superheroes.map(function(hero){
    return hero.name; 
});
console.log(superheroNames);

const weight = function(hero){
    return hero.weight < 190; 
};

const lightWeight = superheroes.filter(weight);
console.log(lightWeight);


  /*const superheroNames = superheroes.map((hero) =>{
      return hero.name;
  });
  console.log(superheroNames);

  const lightWeights = superheroes.filter((light)=>{
      return light.weight < 190;
  });
  console.log(lightWeights);

  const twohundered = superheroes.filter((two)=>{
      return two.weight == 200;  
  });
   const twoNames = twohundered.map((hero)=>{
      return hero.name;
  });
  console.log(twoNames);

const firstapp = superheroes.filter(function(hero){
    return hero.first_appearance;
});

  const first = firstapp.map((hero)=>{
      return hero.first_appearance;
  });
  console.log(first);

  const dc = superheroes.filter((hero)=>{
      return hero.publisher == 'DC Comics';
  });
  console.log(dc);
  const marvel = superheroes.filter((hero)=>{
    return hero.publisher == 'Marvel Comics';
});
console.log(marvel);

const dcWeight = dc.map((hero)=>{
    return parseInt(hero.weight);
});
console.log(dcWeight);


const totalWeightDc = dcWeight.reduce(function(previous, current){
    return previous + current;
});
console.log(totalWeightDc);

const marvelWeight1 = marvel.filter(function(hero){
    return parseInt(hero.weight);
})

const marvelWeight = marvelWeight1.map((hero)=>{
    return parseInt(hero.weight);
});
console.log(marvelWeight);


const totalWeightMarvel = marvelWeight.reduce(function(previous, current){
    return previous + current;
});
console.log(totalWeightMarvel);

const filteredHeroes = superheroes.filter(function(hero){
    return parseInt(hero.weight);
});
const heavyHero = filteredHeroes.reduce(function(previous, current){
    if (parseInt(previous.weight)> parseInt(current.weight)){
        return previous;
    } else {
        return current;
    };
});
console.log(heavyHero);*/