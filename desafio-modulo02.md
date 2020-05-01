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

# Question 03 

3º exercício
A partir do seguinte vetor:
var nomes = ["Diego", "Gabriel", "Lucas"];
Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
● Diego
● Gabriel
● Lucas

# Setup - Question 03

cd ~/git/rocketseat-starter-js

touch desafio-modulo02-exercicio03-index.html

# Check and test - Question 03

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo02-exercicio03-index.html

\----> the list below should be shown

● Diego
● Gabriel
● Lucas


# Question 04

4º exercício
Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:
<input type="text" name="nome">
<button onClick="adicionar()">Adicionar</button>
Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

# Setup - Question 04

cd ~/git/rocketseat-starter-js

touch desafio-modulo02-exercicio04-index.html

# Check and test - Question 04

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo02-exercicio04-index.html

\----> enter text for the new list item and click the button


