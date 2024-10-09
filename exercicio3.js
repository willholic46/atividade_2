const alunos = [
    { matricula: '111', nome: 'João', nota1: 8.0, nota2: 7.5 },
    { matricula: '222', nome: 'Maria', nota1: 9.0, nota2: 9.0 }
];


alunos.forEach((aluno) => {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Matrícula: ${aluno.matricula}, Nome: ${aluno.nome}, Média: ${media}`);

});