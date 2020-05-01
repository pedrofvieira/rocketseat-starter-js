# Challenge = Desafio Módulo 2

# Question 01

1º exercício

Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
aparecer na tela.

# Setup - Question 01

cd ~/git/rocketseat-starter-js

touch desafio-modulo02-exercicio01-index.html

# Check and test - Question 01

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo02-exercicio01-index.html

\----> click button and a red square should be add the screen


# Question 02

2º exercício
Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:
function getRandomColor() {
 var letters = "0123456789ABCDEF";
 var color = "#";
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
 return color;
}
var newColor = getRandomColor(); // #E943F0


# Setup - Question 02

cd ~/git/rocketseat-starter-js

touch desafio-modulo02-exercicio01-index.html

# Check and test - Question 02

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo02-exercicio02-index.html

\----> mouse over some square and the color of that square must have changed
