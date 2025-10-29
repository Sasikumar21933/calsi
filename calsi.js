let input =document.getElementById("screen")

function display(num){
    input.value=input.value+num;
}
function calculate(){
    input.value=eval(input.value);
}
function squar(){
    if(input.value){
        input.value=Math.pow(eval(input.value),2);
    }
}
function cube(){
    if(input.value){
        input.value=Math.pow(eval(input.value),3);
    }
}
function erase(){
    input.value="";
}
function delet(){
    input.value=input.value.slice(0,-1);
}