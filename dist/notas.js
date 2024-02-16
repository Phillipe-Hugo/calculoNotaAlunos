"use strict";

// Criação de um array de objetos com nomes e notas de alunos
var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Carlos',
  nota: 7
}, {
  nome: 'Ana',
  nota: 9
}, {
  nome: 'Pedro',
  nota: 6
}];

// Função para filtrar alunos com nota maior ou igual a 6
var alunosAprovados = function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Chamada da função e exibição dos resultados
var aprovados = alunosAprovados(alunos);
console.log('Alunos aprovados:', aprovados);