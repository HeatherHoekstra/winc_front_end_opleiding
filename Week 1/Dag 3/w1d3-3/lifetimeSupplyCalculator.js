function calculateSupply(age, amountDay) {
    const totalAmount = amountDay * age * 365;
    console.log('You will need ' + totalAmount + ' ' + 'to last you until the ripe old age of ' + age);
}
calculateSupply(1, 1)
calculateSupply(100, 10)
calculateSupply(65, 0.5)

/*ik had de opdracht verkeerd gelezen, en heb gedaan wat je nodig
hebt om tot een bepaalde leeftijd te komen ipv wat er nodig is om
nog verder te leven tot een bepaalde leeftijd. 
Dat kan ik nu nog wel gaan aanpassen nu ik het antwoord heb gezien, 
maar daar leer ik niet zo veel van..

function calculateSupply(age, numPerDay) {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    console.log(message);
  }
  
  calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);
  */