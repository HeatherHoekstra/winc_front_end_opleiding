const isArray = function(arr){
    return Array.isArray(arr);
};
console.log(isArray('Winc Winc, nudge nudge'));
console.log(isArray([1, 2, 4, 0]));

const benelux = ["Belgie", 1, "Nederland", 2, "Luxemburg", 3];
const firstElement = function (){
    return benelux[0];
};
console.log(firstElement());

const presidents = ["Trump", "Obama", "Bush", "Clinton"]; 
const impeachTrump = function(array) {
presidents.splice(0,1);
return presidents; 
};
console.log(impeachTrump(presidents));

const words= ['Winc', 'Academy', 'is', 'leuk', ';-}'];
const stringsTogether = function(){
    return words.join(' ');
};
console.log(stringsTogether());

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combineArrays = function(){
    return arr1.concat(arr2);
};
console.log(combineArrays());
    

