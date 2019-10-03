let colors= ['yellow', 'blue', 'red', 'orange'];
let i=0;

while(i < colors.length){
    console.log(colors[i]);
    i++;
}

for(i=0; i < colors.length; i++){
    console.log(colors[i]);
}

colors.forEach(function(element){
    console.log(element);
})

/*
1. 3
2. ook 3..
3. forEach is minder fout gevoelig, omdat je niet zelf hoeft te 
zeggen dat hij bij de volgende loop naar het volgende index (gebruikt ik
dat zo correct?) moet gaan. Ik vind forEach ook gemakkelijker te 
lezen omdat ik niet hoef te onthouden waar alle dingen in de for
loop voor staan. 
4. Nee, hij laat nu gewoon zien wat er de values van het object zijn.*/
const person= {
    name: 'Heather',
    age: 26, 
    favFood: 'Pizza',
    hobby: 'Running',
    pet: 'cat'
};
console.log(Object.values(person));