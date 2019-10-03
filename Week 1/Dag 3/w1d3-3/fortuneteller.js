function tellFortune(numberOfChildren, namePartner, location, jobTitle){ 
console.log('You will be a' + jobTitle + 'in' + location + ', ' + 'and maried to' + namePartner + 'with' + ' ' + numberOfChildren + ' ' + 'kids.');
}
tellFortune(4, ' Hanna ', ' Emmen', ' banker ')
tellFortune(2, ' Klaas ', ' New York', ' farmer ')
tellFortune(10, ' Erasmus ', ' Oslo', ' teacher ')

/* Dit is de oplossing van de site. Waarom zou een losse var
handiger zijn dan het in de console.log te doen?

function tellFortune(jobTitle, geoLocation, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}
*/