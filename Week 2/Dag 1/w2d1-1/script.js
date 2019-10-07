const superheroes= [{name: "Batman", alter_ego: "Bruce Wayne"}, {name: "Superman", alter_ego: "Clark Kent"}, {name: "Spiderman", alter_ego: "Peter Parker"},];
const findHero= superheroes.find((hero) =>{ 
    return hero.name === "Spiderman";
});
console.log(findHero);

const doubleArrayValues = [1, 2, 3];
const double = doubleArrayValues.map((value) =>{
    return value *2;
});
console.log(double);
console.log(doubleArrayValues);

const isBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];
const bigger = isBiggerThan10.some((number)=>{
    return number > 10;
});
console.log(bigger);

const italyInTheGreat7 = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const includes = italyInTheGreat7.includes('Amsterdam');
console.log(includes);

const duplication = [1, 4, 3, 6, 9, 7, 11];
const double2 = duplication.map((number) => {
    return(number + number);
});
console.log(double2);

const below100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const below = below100.filter((number) =>{
    return number < 100;
});
console.log(below);

const bigSum = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234];
const total = bigSum.reduce((currentTotal, number)=>{
    return number + currentTotal;
}, 0);
console.log(total);

