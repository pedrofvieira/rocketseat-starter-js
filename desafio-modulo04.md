# Challenge = Desafio Módulo 4

# Question 01

1º exercício
Crie uma função que recebe a idade de um usuário e retorna uma Promise que depois de 2 segundos retornará se usuário é maior ou não que 18 anos. Se o usuário ter mais que 18 anos de idade o resultado deve cair no .then, caso contrário, no .catch

function checaIdade(idade) {
 // Retornar uma promise
}
checaIdade(20)
 .then(function() {
 console.log("Maior que 18");
 })
 .catch(function() {
 console.log("Menor que 18");
 });

# Setup - Question 01

cd ~/git/rocketseat-starter-js

touch desafio-modulo04-exercicio01-index.html

touch desafio-modulo04-exercicio01-main.js

# Check and test - Question 01

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo04-exercicio01-index.html

\----> watch the console (In Firefox, open the general menu, select Web Developer >> Console Web)

\----> the text should be displayed on the console:
