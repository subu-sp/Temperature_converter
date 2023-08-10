const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('clear');

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  return (kelvin - 273.15) * 9/5 + 32;
}

convertButton.addEventListener('click', () => {
  const celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    const kelvin = celsiusToKelvin(celsius);

    fahrenheitInput.value = fahrenheit.toFixed(2);
    kelvinInput.value = kelvin.toFixed(2);
  }
});

resetButton.addEventListener('click', () => {
  celsiusInput.value = '';
  fahrenheitInput.value = '';
  kelvinInput.value = '';
});



