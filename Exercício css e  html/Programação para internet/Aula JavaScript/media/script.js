function mediaCalc(){
   var nota1 = parseFloat(document.getElementById("inNota1").value) ;
   var nota2 = parseFloat(document.getElementById("inNota2").value);
   var nome = document.getElementById("inNome").value;
   var outMedia = document.getElementById("outMedia");
   var outAprovado = document.getElementById("outAprovado");

   var media = (nota1 + nota2) / 2

    alert("media "+media)
    outMedia.textContent="Media: "+ media;

    console.log(media);
    console.log(nome);

    if(media >= 7){
        outAprovado.textContent= "Aluno(a): "+nome+" está aprovado." 
    }else{
        outAprovado.textContent= "Aluno(a): "+nome+" está reprovado."  
    }
   
}