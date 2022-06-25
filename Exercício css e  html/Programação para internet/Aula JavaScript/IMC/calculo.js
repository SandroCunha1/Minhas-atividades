function calculoPeso(){
   var inNome = document.getElementById("inNome").value;
   var inAltura =parseFloat(document.getElementById("inAltura").value); 
   var pesoIdealM = (inAltura*inAltura)*22;
   var pesoIdealF =  (inAltura*inAltura)*21;

   if(document.getElementById('rbMasculino').checked) {
    outResposta.textContent = inNome+", seu peso ideal é "+pesoIdealM.toFixed(2);
  }else if(document.getElementById('rbFeminino').checked) {
    outResposta.textContent = inNome+", seu peso ideal é "+pesoIdealF.toFixed(2);
  }
   

   



}
function limpaCampos(){
    document.getElementById("inNome").value="";
    document.getElementById("rbMasculino").checked=false;
    document.getElementById("rbFeminino").checked=false;
    document.getElementById("inAltura").value="";
    document.getElementById("outResposta").textContent="";

    document.getElementById("inNome").focus();
}