function calcTab(){
    var inNumero= document.getElementById("inNumero").value;
    var resposta = document.getElementById("outTab");
    var res=' ';

    for(var i = 1; i<=10; i++){
        res += inNumero+" x "+i+" = "+ inNumero*i+"<br />"; 
        resposta.innerHTML = res;
    }


}