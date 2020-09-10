# Desafio da semana #2

Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:

```js
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
> function soma (x, y) {
... return x + y;
... }

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var z = soma(3, 4) + 5;

// Qual o valor atualizado dessa variável?
12

// Declare uma nova variável, sem valor.
var t

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
> function atrib(){
... t = 4;
... return 'o valor de t agora é ' + t;
... }

// Invoque a função criada acima.
> atrib()

// Qual o retorno da função? (Use comentários de bloco).
/*
'o valor de t agora é 4'
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
> function vol(a, b, c) {
... if(a === undefined || b === undefined || c === undefined) {
..... return 'Preencha todos os valores corretamente!';
..... }
... return (a * b * c) + 2;
... }

// Invoque a função criada acima, passando só dois números como argumento.
> vol(1, 3)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//'Preencha todos os valores corretamente!'

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
> vol(5, 2 , 8)

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//82

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
> function teste(k, l, m) {
... if(k !== undefined && l === undefined && m === undefined) {
..... return k;
..... }
... else if(k !== undefined && l !== undefined && m === undefined) {
..... return k + l;
..... }
... else if(k !== undefined && l !== undefined && m !== undefined) {
..... return (k + l)/m;
..... }
... else if(k === undefined && l === undefined && m === undefined) {
..... return false;
..... }
... else if (k === null && l === null && m === null) {
..... return null;
..... }
... }

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
> teste(10) //10
> teste (10, 8) //18
> teste (10, 8, 2) //9
> teste() //false

