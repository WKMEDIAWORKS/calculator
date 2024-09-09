 function operate(num1,num2,operator){
    switch(operator){
        case'+':return num1 + num2;
        case'-':return num1-num2;
        case'*':return num1 * num2;
        case'/':return num1/num2;
       
        default: return num1;
    }
}
const btns = document.querySelectorAll("button");

let input = '';
let num1 = null; 
let num2 = null; 
let operator = null; 
const display = document.getElementById("display");


function updateDisplay(value) {
    display.textContent = value;
}

btns.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === 'AC') {
    
            input = '';
            num1 = null;
            num2 = null;
            operator = null;
            updateDisplay(input);
        }  else if (['+', '-', '*', '/'].includes(value)) {
            if (num1 !== null && operator !== null) {
            
                num1 = operate(num1, parseFloat(input), operator); 
                updateDisplay(num1); 
                input = ''; 
            } else {
                num1 = parseFloat(input); 
                input = ''; 
            }
            operator = value; 
        } else if (value === '=') {
            
            if (num1 !== null && operator !== null && input !== '') {
                num1 = operate(num1, parseFloat(input), operator); 
                updateDisplay(num1); 
                input = ''; 
                operator = null;
            }
        }
        
        else {
            input += value;
            updateDisplay(input); 
        }
    });
});
