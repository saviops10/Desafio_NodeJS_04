import { NOMEM } from "dns";

/*REQUERIMENTOS:
R01 – Representar o Aluno com classe Aluno
(Nome, Idade, Nota);
R02 – Utilizar lista de Alunos com array de Aluno
let alunos:Array<Aluno> = [];

Recebe os dados no readline dentro do loop, cria um new Aluno, coloca esses dados dentro dele e ja faz o push pro array
*/
console.log('Desafio 04 NodeJS ')
class Aluno {
  [x: string]: any;
	constructor (nome: string, idade: number, nota: number){
  this._nome = nome;
  this._idade = idade;
  this._nota = nota;
}
}

let alunos:Array<Aluno> = [];
let Alunos = new Aluno('nome', 0,0);

var readlineSync = require('readline-sync');

var cadastro = readlineSync.question('Quantos alunos deseja cadastrar?');
let arrayAlunos = [cadastro];


console.log('\n');

console.log('Sua lista contem ' +`${arrayAlunos}`+ ' alunos');
console.log("\n");

// var idade = [];
// var notas = [];
// var nome = [];

console.log(' Vamos iniciar o cadastramento: '+"\n");

for (var i = 0; i < cadastro; i++)
            {
                console.log("Escreva os nome do aluno: " +i);
                Alunos[i] = readlineSync.question();
                arrayAlunos.push(Alunos[i]);
                console.log(Alunos[i] + " Foi cadastrado!");
                console.log("\n"); 

                console.log("Por favor, informe a idade deste aluno: " );
                Alunos[i] = parseInt(readlineSync.question());
                arrayAlunos.push(Alunos[i]);
                console.log(" A idade " + Alunos[i] + " foi atribuida ao aluno " );
                console.log("\n");

                console.log("Por favor, informe a nota deste aluno: " );
                Alunos[i] = parseInt(readlineSync.question());
                arrayAlunos.push(Alunos[i]);
                console.log(" A nota " + Alunos[i] + " foi atribuida ao aluno " );
                console.log("\n");

            }
            console.log(arrayAlunos);
            console.log("\n");
            console.log(Alunos[i]);
