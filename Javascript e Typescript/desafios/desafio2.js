"use strict";
// Como podemos melhorar o esse código usando TS? 
var profissao;
(function (profissao) {
    profissao[profissao["atriz"] = 0] = "atriz";
    profissao[profissao["padeiro"] = 1] = "padeiro";
})(profissao || (profissao = {}));
var pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.atriz,
};
var pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.padeiro,
};
var pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.atriz,
};
var pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.padeiro,
};
