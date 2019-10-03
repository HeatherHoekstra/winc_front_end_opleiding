const age= 25; 
const isFemale= false;
const driverStatus= ('bob');
const name= ('Bram');
const totalAmount= 26;

if (age >=18){
    console.log('Hoera! Je mag naar binnen!');
}
else { 
    console.log('Jammer dan, je moet buiten blijven..');
}

if (isFemale== true){
    console.log('En je bent nog een vrouw ook!');
}
else { 
    console.log('Maar je bent een man, dus je mag toch niet naar binnen.');
}



if (driverStatus== 'bob'){
    console.log('Je bent sober, dus mag rijden!');
}
else {
    console.log('Ik zal een taxi voor je bellen');
}

if (age >=18 && age <=25){
    console.log('Je krijgt 50% korting!');
}
else {
    console.log('Je bier is duur.. Wil je wel naar binnen?');
}

if (name === 'Sarah' || name === 'Bram'){
    console.log('Gefeliciteerd! Je krijgt een gratis biertje!')
}

if (totalAmount >=100){
    console.log('Gratis fles champange!!'); 
}
else if (totalAmount >50){
    console.log('Gratis nachos!');
}
else if (totalAmount >25){
    console.log('Gratis bitterballen!!');
}

