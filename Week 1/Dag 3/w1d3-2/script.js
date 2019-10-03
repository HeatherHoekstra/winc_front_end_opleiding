/*makeCheeseSandwich
Get slice of bread
Add cheese
Put slice of bread on top */

function makeCheeseSandwich() {
    console.log('Get slice of bread');
    console.log('Add cheese');
    console.log('Put slice of bread on top');
}
makeCheeseSandwich()

function makeSandwich(topping) {

    console.log('There you go, a sandwich with' + ' ' + topping);

}
makeSandwich('cheese')

function calculateDiscountedPrice(totalAmount, discount) {
    console.log(Math.round(totalAmount * discount));
}
calculateDiscountedPrice(12, 0.75)

function calculateDiscountedPriceMinimum(totalAmount, discount) {
    if (totalAmount >25) {
        console.log(Math.round(totalAmount * discount));
    }
    else { 
        console.log(totalAmount);
    }
}
calculateDiscountedPriceMinimum(25.25, 0.75)


//naderhand nog met return proberen
function calculateDiscountedPrice(totalAmount, discount) {
    console.log(Math.round(totalAmount * discount));
}
calculateDiscountedPrice(12, 0.75)

function calculateDiscountedPriceD(totalAmount, discount) {
    return (Math.round(totalAmount * discount))
}
console.log(calculateDiscountedPriceD(12, 0.75));