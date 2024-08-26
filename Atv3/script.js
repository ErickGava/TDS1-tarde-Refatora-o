function Calcular(){
var n1 = parseFloat(document.getElementById("num1").value)
var n2 = parseFloat(document.getElementById("num2").value)
var operador = document.getElementById("operador").value
var resultado

switch(operador){
 case "+":
   resultado = n1 + n2   
    break;
 case "-":
        resultado = n1 - n2
        break;
case "*":
    resultado = n1 * n2
    break;
case "/":
    if(num2 !== 0){
        resultado = n1 / n2
        break;
    }else{
        resultado = "Error"
    }
    
    default: 
    resultado = "Operador Inválido"
    
}
document.getElementById("resultado").textContent = resultado
}