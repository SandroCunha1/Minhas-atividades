function registrar(){

   var qntPalavra = document.getElementById("inPalavra").value;
   var res = 'Letras: '
   var resposta1 = document.getElementById("outPalavra")
   var resposta2 = document.getElementById("outPalavra")
   document.getElementById("btRegister").setAttribute('disabled', 'disabled')

   console.log(qntPalavra.length);
   qntPalavra = qntPalavra.split('')
   console.log(qntPalavra)

   resposta1.textContent = "Letras"
   for(var i = 0; i < qntPalavra.length; i++){
        res += " _ "
   }
   resposta2.textContent= res;
}
function tentativa(){
   var letra = document.getElementById("inLetra").value
   var qntPalavra = document.getElementById("inPalavra").value;
   qntPalavra = qntPalavra.split('')
   console.log(qntPalavra[0])
}