function calcularimc(){
var peso = parseFloat(document.getElementById("peso").value)
var altura = parseFloat(document.getElementById("altura").value)
var resultado = document.getElementById("resultado")
resultado.textContent = peso / (altura * altura).toFixed(2)



}