let resultado = document.querySelector("#resultado");

function mostrarTabuada() {
        let numero = document.querySelector("#numero");
numero = Number(numero.value);

if (numero <1 || numero > 10) {
    alert("Você digitou um número fora do intervalo permitido.")
    limparTabuada();
}
else {

    
let msg = "";

    for (var i=0; i<=10; i++) {
msg += `${numero} x ${i} = ${numero * i} <br>`    
    }
resultado.innerHTML = msg;
}
}

function limparTabuada() {
    resultado.innerHTML = "";
numero.focus();
numero.value = "";
}