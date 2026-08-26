const turmas = [
  {
    nomeProfessor: "Ana Silva",
    alunos: [
      { nome: "João", nota: 8.5 },
      { nome: "Maria", nota: 6.0 },
      { nome: "Pedro", nota: 9.2 },
      { nome: "Lucia", nota: 5.5 }
    ]
  },
  {
    nomeProfessor: "Carlos Mendes",
    alunos: [
      { nome: "Fernanda", nota: 7.0 },
      { nome: "Rafael", nota: 4.8 },
      { nome: "Beatriz", nota: 8.0 }
    ]
  }
];

function ordenarAlunosPorNota(turmas) {
  for (let i = 0; i < turmas.length; i++) {
    turmas[i].alunos.sort((a, b) => a.nota - b.nota);
  }
}

function imprimirResultados(turmas) {
  for (let i = 0; i < turmas.length; i++) {
    console.log(`\n=== Turma do(a) professor(a) ${turmas[i].nomeProfessor} ===`);
    
    for (let j = 0; j < turmas[i].alunos.length; j++) {
      const aluno = turmas[i].alunos[j];
      
      if (aluno.nota >= 7) {
        console.log(`Parabéns ${aluno.nome}, você foi aprovado com a nota ${aluno.nota}`);
      } else {
        console.log(`Não foi dessa vez ${aluno.nome}, você reprovou com a nota ${aluno.nota}`);
      }
    }
  }
}

// Execução
ordenarAlunosPorNota(turmas);
imprimirResultados(turmas);