function celsiusToFahrenheit(celcius) {
    const fahrenheit = (celcius*9) /5 +32;
    console.log(celcius + 'graden celcius is ' + fahrenheit + 'graden fahrenheit.')
}
celsiusToFahrenheit(10)

function fahrenheitToCelcius(fahrenheit) {
    const celcius = (fahrenheit-32)*5/9;
    console.log(fahrenheit + 'graden fahrenheit is ' + celcius + 'graden celcius.')
}
fahrenheitToCelcius(100)