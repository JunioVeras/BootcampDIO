"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo) {
    campoSaldo.innerHTML = "0";
}
function somarAoSaldo(soma) {
    var num = Number(campoSaldo.innerHTML) + Number(soma);
    campoSaldo.innerHTML = num.toString();
}
function limparSaldo() {
    campoSaldo.innerHTML = "0";
}
if (botaoAtualizar) {
    if (soma) {
        botaoAtualizar.addEventListener('click', function () {
            somarAoSaldo(soma.value);
        });
    }
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
