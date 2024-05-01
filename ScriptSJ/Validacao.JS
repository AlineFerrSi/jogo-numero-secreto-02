function verificaSeOChutePossuiUmValorValido(chute){
    const numero = +chute //o numero no parametro "chute", vem em Forma de STRING, para transforma-lo em INTEIRO e so add o + ao lado
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor Invalido</div>`;
        return
    }
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido: Fale Um Numero Entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Voce Acertou!!</h2>
        <h3>O Numero Secreto Era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += `<div>O Numero Secreto é Menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }else{
        elementoChute.innerHTML += `<div>O Numero Secreto é Maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click",e =>{
    if(e.target.id == "jogar-novamente"){
        window.location.reload()
    }
})