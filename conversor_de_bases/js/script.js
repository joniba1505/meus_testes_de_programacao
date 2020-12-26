
function converterParaBase() {
    
    let numero = document.querySelector("#numero");
let numeroDecimal = Number(numero.value);
base = selecionarBase();
let numeroConvertido = numeroDecimal.toString(base);
alert(`${numeroDecimal} na base 10 equivale a ${numeroConvertido} na base ${base}.`);
numero.value = "";
numero.focus();
}

function selecionarBase() {
    let base = getRadioValor("tipo-base");
    if (base == "Octal") {
        return 8;
    }
else if (base == "Hexadecimal") {
    return 16;
}
else if (base == "Binária") {
    return 2;
}
else {
    return null;
}
}

function getRadioValor(name) {
    let radios = document.getElementsByName(name);
    for (var i=0; i<radios.length; i++) {
    if (radios[i].checked) {
        return radios[i].value;
    }
    }

return null;
}

