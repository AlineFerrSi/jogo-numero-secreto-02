const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = parseInt(Math.random() * maiorValor + 1 ) 

function numeroAleatorio(){
    return numeroSecreto;
}

console.log(numeroAleatorio())

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;
const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor