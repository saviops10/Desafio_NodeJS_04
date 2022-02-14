/*REQUERIMENTOS:
R01 – Representar o Aluno com classe Aluno
(Nome, Idade, Nota);
R02 – Utilizar lista de Alunos com array de Aluno
let alunos:Array<Aluno> = [];

Recebe os dados no readline dentro do loop, cria um new Aluno, coloca esses dados dentro dele e ja faz o push pro array
*/

import { strictEqual } from "assert";
import { NOMEM } from "dns";

console.log('Desafio 04 NodeJS ')
class aluno {
  [x: string]: any;
	constructor (nome: string, idade: number, nota: number){
  this._nome = nome;
  this._idade = idade;
  this._nota = nota;
}
}

var readlineSync = require('readline-sync');

var cadastro = readlineSync.question('Quantos alunos deseja cadastrar?');
var arrayAlunos = [cadastro];


console.log('\n');

console.log('Sua lista contem ' +`${arrayAlunos}`+ ' alunos');
console.log("\n");

var idade = [];
var notas = [];
var nome = [];
console.log(' Vamos iniciar o cadastramento: '+"\n");

for (var i = 0; i < cadastro; i++)
            {
                console.log("Escreva os nome do aluno: " +i);
                nome [i] = readlineSync.question();
                arrayAlunos.push(nome[i]);
                console.log(nome[i] + " Foi cadastrado!");
                console.log("\n"); 

                console.log("Por favor, informe a idade deste aluno: "+ nome[i]);
                idade [i] = parseInt(readlineSync.question());
                arrayAlunos.push(idade[i]);
                console.log(" A idade " + idade[i] + " foi atribuida ao aluno " + nome[i]);
                console.log("\n");

                console.log("Por favor, informe a nota deste aluno: "+ nome[i]);
                notas [i] = parseInt(readlineSync.question());
                arrayAlunos.push(notas[i]);
                console.log(" A nota " + notas[i] + " foi atribuida ao aluno " + nome[i]);
                console.log("\n");

            }
            console.log(arrayAlunos);
            console.log("\n");
   
           
         

            


        
  
