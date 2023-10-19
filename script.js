let screen = document.getElementById('result');			/*retrieves element with the id "result" and assigns it to variable screen*/
let conversion = '';									/* declares a variable named conversion and initializes it with an empty string*/

function clearScreen() {								/*clears the value displayed on the screen */
screen.value = '';
}

function backspace() {									/*removes the last character from the value displayed on the screen by using the slice()*/
screen.value = screen.value.slice(0, -1);
}

function addSymbol(symbol) {							/* appends provided symbol to value displayed on the screen by concatenating it to the current value*/
screen.value += symbol;
	}

function convertToBinary() {							/*converts the value displayed on screen to binary representation.*/
const value = parseFloat(screen.value);
if (!isNaN(value)) {
screen.value = value.toString(2);
conversion = 'binary';
	}
}

function convertToDecimal() {							/*converts the value displayed on the screen to decimal representation*/
const value = screen.value;
if (conversion === 'binary') {
const decimalValue = parseInt(value, 2);
if (!isNaN(decimalValue)) {
screen.value = decimalValue.toString();
conversion = 'decimal';
	}
} else if (conversion === 'octal') {					
const decimalValue = parseInt(value, 8);
if (!isNaN(decimalValue)) {
screen.value = decimalValue.toString();
conversion = 'decimal';
	}
} else if (conversion === 'hexadecimal') {				
const decimalValue = parseInt(value, 16);
if (!isNaN(decimalValue)) {
screen.value = decimalValue.toString();
conversion = 'decimal';
		}
	}
}

function convertToOctal() {								/*converts the value displayed on the screen to octal representation*/
const value = parseFloat(screen.value);
if (!isNaN(value)) {
screen.value = value.toString(8);
conversion = 'octal';
	}
}

function convertToHex() {								/*converts the value displayed on the screen to hexadecimal representation.*/
const value = parseFloat(screen.value);
if (!isNaN(value)) {
screen.value = value.toString(16).toUpperCase();
conversion = 'hexadecimal';
	}
}

function calculate() {									/*evaluates mathematical expression represented by the value displayed on screen using eval() function*/
const expression = screen.value;
const result = eval(expression);
screen.value = result;
}