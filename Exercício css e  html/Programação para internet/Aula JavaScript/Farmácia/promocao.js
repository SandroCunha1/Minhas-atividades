function promocao(){

    var inProduto=document.getElementById("inProduto");
    var inPreco=document.getElementById("inPreco");
    var outProduto=document.getElementById("outProduto");
    var outPromocao=document.getElementById("outPromocao");

    var preco= inPreco.value;
    var produto= inProduto.value;
    
    var promocao= Math.floor(preco*2);

    outProduto.textContent=produto;
    outPromocao.textContent="Promoção!! de: R$"+(preco*2)+" Foi para: R$"+promocao;



}