
function Root(){
document.getElementById("answer").innerHTML = (Math.sqrt(Number(document.getElementById("userInput").value)));
}

function othername() {
    //connects text with variable   
    var input = document.getElementById("userInput").value;
    input = input.split(' ').join('');
    
    
    //all four help get second number 3-2, gets -2. 
    var numb = input.substr(Number(input.indexOf("-")));
    var numberrr = input.substr(Number(input.indexOf("+")));
    var nummb = input.substr(Number(input.indexOf("*")))
    var number = input.substr(Number(input.indexOf("/")));



    if (Number(input.indexOf("+")) > 0){
    //selects numbers ints them and adds them. Same with other if statements
document.getElementById("answer").innerHTML = (Number(numberrr.slice(1)) + Number(input.substr(0, Number(input.indexOf("+")))));
}
 if (Number(input.indexOf("-")) > 0){
document.getElementById("answer").innerHTML = (Number(input.substr(0, Number(input.indexOf("-")))) - Number(numb.slice(1)));
}
if (Number(input.indexOf("*")) > 0){
document.getElementById("answer").innerHTML = (Number(nummb.slice(1)) * Number(input.substr(0, Number(input.indexOf("*")))))
}
 if (Number(input.indexOf("/")) > 0){
document.getElementById("answer").innerHTML = (Number(input.substr(0, Number(input.indexOf("/")))) / Number(number.slice(1)));
}
}
