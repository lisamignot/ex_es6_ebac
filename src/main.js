//criando array de objetos com dois atributos (nome, nota)
const alunos = [
    {nome: 'Marcos', nota: 9},
    {nome: 'Maria', nota: 4},
    {nome: 'Luana', nota: 7},
    {nome: 'Jorge', nota: 5.5},
    {nome: 'Julia', nota: 8},
    {nome: 'Tomas', nota: 5},
    {nome: 'Sofia', nota: 6}
]

//arrow function para filtrar as notas
const filtrarNotas = aluno => aluno.nota >= 6;
const aprovados = alunos.filter(filtrarNotas);

console.log(aprovados);