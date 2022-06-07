// Como podemos melhorar o esse código usando TS? 

enum profissao{
    atriz,
    padeiro
}

interface Pessoa
{
    nome: string,
    idade: number,
    profissao: profissao,
}

let pessoa1: Pessoa =
{
    nome: "maria",
    idade: 29,
    profissao: profissao.atriz,
}

let pessoa2: Pessoa =
{
    nome: "roberto",
    idade: 19,
    profissao: profissao.padeiro,
}

let pessoa3: Pessoa =
{
    nome: "laura",
    idade: 32,
    profissao: profissao.atriz,
}

let pessoa4: Pessoa =
{
    nome: "carlos",
    idade: 19,
    profissao: profissao.padeiro,
}