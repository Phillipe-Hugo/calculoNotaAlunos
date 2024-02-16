// Criação de um array de objetos com nomes e notas de alunos
const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Pedro', nota: 6 },
  ];
  
  // Função para filtrar alunos com nota maior ou igual a 6
  const alunosAprovados = (alunos) => {
    return alunos.filter((aluno) => aluno.nota >= 6);
  };
  
  // Chamada da função e exibição dos resultados
  const aprovados = alunosAprovados(alunos);
  console.log('Alunos aprovados:', aprovados);