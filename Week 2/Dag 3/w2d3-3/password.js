let passwordVerifier= function(password){
   let numberOfValidations = 0;
const wordlength = (password) =>{
if(password.length > 8){
    return numberOfValidations +1;
} else {
    return "password is te kort";
};};
const notNull = (password) =>{
if (password == null){
    return numberOfValidations +1;
} else {
    return "password kan niet leeg zijn";
};};
const uppercase = (password) =>{
    if (password.match (/[A-Z]/)){
        return numberOfValidations +1; 
    } else{
        return "password moet minstens één hoofdletter hebben";
    };};
const lowercase = (password) =>{
    if (password.match (/[a-z]/)){
        return numberOfValidations +1; 
     } else{
         return "password moet minstens één kleine letter hebben";
     };};
const haveNumber = (password) =>{
    if (password.match (/[0-9]/)){
        return numberOfValidations +1;
    } else{
        return "password moet minstens één getal bevatten";
    };};
};



module.exports = passwordVerifier;