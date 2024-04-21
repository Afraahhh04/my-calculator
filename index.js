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