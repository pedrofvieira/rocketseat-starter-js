# Challenge = Desafio Módulo 1

# Question 01

1º exercício

Crie uma função que dado o objeto a seguir:
var endereco = {
 rua: "Rua dos pinheiros",
 numero: 1293,
 bairro: "Centro",
 cidade: "São Paulo",
 uf: "SP"
};
Retorne o seguinte conteúdo:
O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
nº 1293.

# Setup - Question 01

cd ~/git/rocketseat-starter-js

touch desafio-modulo01-exercicio01-index.html

# Check and test - Question 01

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo01-exercicio01-index.html

\----> watch the console (In Firefox, open the general menu, select Web Developer >> Console Web)

\----> the text should be displayed on the console:

*O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos pinheiros" com nº 1293*

# Question 02

2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
function pares(x, y) {
 // código aqui
}
pares(32, 321);

# Setup - Question 02

cd ~/git/rocketseat-starter-js

touch desafio-modulo01-exercicio02-index.html

# Check and test - Question 02

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo01-exercicio02-index.html

\----> watch the console (In Firefox, open the general menu, select Web Developer >> Console Web)

\----> the text should be displayed on the console:

32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142, 144, 146, 148, 150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198, 200, 202, 204, 206, 208, 210, 212, 214, 216, 218, 220, 222, 224, 226, 228, 230, 232, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 254, 256, 258, 260, 262, 264, 266, 268, 270, 272, 274, 276, 278, 280, 282, 284, 286, 288, 290, 292, 294, 296, 298, 300, 302, 304, 306, 308, 310, 312, 314, 316, 318, 320

# Question 03

3º exercício

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.
function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
Dica: para verificar se um vetor contém um valor, utilize o método indexOf.

# Setup - Question 03

cd ~/git/rocketseat-starter-js

touch desafio-modulo01-exercicio03-index.html

# Check and test - Question 03

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo01-exercicio03-index.html

\----> watch the console (In Firefox, open the general menu, select Web Developer >> Console Web)

\----> the text should be displayed on the console:

true


# Question 04

4º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:
function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

# Setup - Question 04

cd ~/git/rocketseat-starter-js

touch desafio-modulo01-exercicio04-index.html

# Check and test - Question 04

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo01-exercicio04-index.html

\----> watch the console (In Firefox, open the general menu, select Web Developer >> Console Web)

\----> the text should be displayed on the console:

De 7 acima: Jedi Master


# Question 05

5º exercício

Dado o seguinte vetor de objetos:
var usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];
Escreva uma função que produza o seguinte resultado:
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
Dica: Para percorrer um vetor você deve utilizar a sintaxe for...of e para unir valores de um array
com um separador utilize o join.

# Setup - Question 05

cd ~/git/rocketseat-starter-js

touch desafio-modulo01-exercicio05-index.html

# Check and test - Question 05

\----> open the file in the browser file:///home/user/git/rocketseat-starter-js/desafio-modulo01-exercicio05-index.html

\----> watch the console (In Firefox, open the general menu, select Web Developer >> Console Web)

\----> the text should be displayed on the console:

O Diego possui as habilidades: Javascript, ReactJS, Redux 
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
