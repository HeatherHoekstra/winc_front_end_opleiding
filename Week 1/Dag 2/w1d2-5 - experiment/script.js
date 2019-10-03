const age = 26;
const isFemale = true;
const driverStatus = ('bab');
const name = ('Brom');
const totalAmount = 17;

/*opdracht 5 geprobeerd aan te passen zodat het zou 'kloppen' 
(dus geen aanbiedingen als je toch niet naar binnen mag)
En het werkt ook nog! */

if (age >= 18 && isFemale === true) {
    console.log('Hoera! Je mag naar binnen!');
    if (driverStatus == 'bob') {
        console.log('Je bent sober, dus mag rijden!');
    }
    else {
        console.log('Ik zal een taxi voor je bellen');
    }

    if (age >= 18 && age <= 25) {
        console.log('Je krijgt 50% korting!');
    }
    else {
        console.log('Je bier is duur.. Wil je wel naar binnen?');
    }

    if (name === 'Sarah' || name === 'Bram') {
        console.log('Gefeliciteerd! Je krijgt een gratis biertje!')
    }

    if (totalAmount >= 100) {
        console.log('Gratis fles champange!!');
    }
    else if (totalAmount > 50) {
        console.log('Gratis nachos!');
    }
    else if (totalAmount > 25) {
        console.log('Gratis bitterballen!!');
    }
}
else {
    console.log('Jammer dan, je moet buiten blijven..');
}





