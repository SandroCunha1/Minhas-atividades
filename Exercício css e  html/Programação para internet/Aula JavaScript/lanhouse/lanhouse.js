function preco(){
    var inValor=document.getElementById("inValor").value;
    var inTempo=document.getElementById("inTempo").value;

    var preco= Math.ceil(inTempo/15)* inValor;

    outPreco.textContent="Valor a pagar: R$"+preco;
}