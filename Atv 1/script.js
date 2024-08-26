function soma(){
    var numero01 = document.getElementById("number01").valueAsNumber
    var numero02 = parseFloat(document.getElementById("number02").value)
    var resposta = document.getElementById("respSoma")
    resposta.textContent = numero01 + numero02
    }
    function sub(){
        var numero03 = document.getElementById("number03").valueAsNumber
        var numero04 = parseFloat(document.getElementById("number04").value)
        var resposta = document.getElementById("respsub")
        resposta.textContent = numero03 - numero04
    }
    function mul(){
        var numero05 = document.getElementById("number05").valueAsNumber
        var numero06 = parseFloat(document.getElementById("number06").value)
        var resposta = document.getElementById("respmul")
        resposta.textContent = numero05 * numero06
    }
    function div(){
        var numero07 = document.getElementById("number07").valueAsNumber
        var numero08 = parseFloat(document.getElementById("number08").value)
        var resposta = document.getElementById("respdiv")
        resposta.textContent = numero07 / numero08
    }