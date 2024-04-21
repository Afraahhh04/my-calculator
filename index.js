function display(num){ 
    var input= document.getElementById('input');
    console.log(input);
    if( input.textContent=='0'){
        input.textContent=num;
 }
    else if(num=='clear') {
        input.textContent="";
         
    }
else{
    input.textContent+=num;

    }
}
function calculate() {
    var input = document.getElementById('input');
    var expression = input.textContent;
    var result = eval(expression);
    input.textContent = result;
}
function clearDisplay() {
    document.getElementById('input').innerText = '0'; // Set display to 0
}

function deleteLast() {
    let display = document.getElementById('input').innerText;
    if (display.length > 1) {
        document.getElementById('input').innerText = display.slice(0, -1); // Remove the last character
    } else {
        document.getElementById('input').innerText = '0'; // If there's only one character, set display to 0
    }
}
