class MyCalculator {
constructor (x, y) {
    this.x = x; 
    this.y = y;
}
	static add(x, y) {
	
		let sum = x + y;
		result.textContent = sum;
	}
	
	static subtract(x, y) {
	
		let subtract = x - y;
        result.textContent = subtract;
	
	}
	
	static multiply(x, y) {
	
		let multiply = x * y;
        result.textContent = multiply;
	
	}
	
	
	static divide(x, y) {
	
		let divide = x / y;
        result.textContent = divide;
        
	
	}

}

let x = Number(document.getElementById("first_arg").value);
let y = Number(document.getElementById("second_arg").value);
let result = document.getElementById("result");

function add () {
    MyCalculator.add(x, y);
}
function subtract () {
    MyCalculator.subtract(x, y);
}
function multiply () {
    
    MyCalculator.multiply(x, y);
}
function divide () {

    if (y === 0){
	
        result.textContent = "Cannot divide by zero!";
    
    }
    
    else{
    
        MyCalculator.divide(x, y);
}
}

document.querySelector('.calculator__addition').addEventListener('click', add);
document.querySelector('.calculator__subtraction').addEventListener('click', add);
document.querySelector('.calculator__multiplication').addEventListener('click', add);
document.querySelector('.calculator__division').addEventListener('click', add);


