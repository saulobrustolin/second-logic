//IDs: inNumero, btAdicionar, btVerificar, outNumero, outOrdem;

valores = [];

function Adicionar(){
    var inNumero = document.getElementById("inNumero");
    numero = Number(inNumero.value);

    if(isNaN(numero) || inNumero == ""){
        alert("Por favor, digite um valor válido!");
        inNumero.focus();
        return;
    } else if(valores.indexOf(numero) != -1){
        alert("Esse número já foi adicionado, por favor digite outro valor!");
        inNumero.focus();
        return;
    }

    valores.push(numero);

    console.log(valores);

    Listar();
}

function Listar(){
    var inNumero = document.getElementById("inNumero");
    numero = Number(inNumero.value);

    var outNumeros = document.getElementById("outNumeros");

    var lista = valores.join(", ");

    outNumeros.textContent = "Números: " + lista;
}

function Verificar(){
    var ValoresCopia = valores.slice();

    var outOrdem = document.getElementById("outOrdem");

    ValoresCopia.sort(function (a,b) {return a-b});

    var contagem = 0;

    for(var i = 0; i < valores.length; i++){
        if(valores[i] == ValoresCopia[i]){
            contagem += 1;
        }
    }

    if(contagem == valores.length){
        outOrdem.textContent = "Atenção... Números ESTÃO em ordem crescente!"
    } else{
        outOrdem.textContent = "Atenção... Números NÃO estão em ordem crescente!"
    }
}

var adicionar = document.getElementById("btAdicionar");
adicionar.addEventListener("click", Adicionar);

var verificar = document.getElementById("btVerificar");
verificar.addEventListener("click", Verificar);