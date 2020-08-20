/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
> var arrayAlet = [20, 59, 'suco', 'pedra', 0];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
> function funcArray (x) {
... return x;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(funcArray(arrayAlet[1]));
  
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
> function retArray(x, y) {
... return x[y];
... }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
> var arrFive = [false, -0, 25, 'rafael', NaN]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

> console.log(retArray(arrFive, 0)); //false
> console.log(retArray(arrFive, 1)); //-0
> console.log(retArray(arrFive, 2)); //25
> console.log(retArray(arrFive, 3)); //'rafael'
> console.log(retArray(arrFive, 4)); //NaN
  
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (x) {
var nomeLivros = {'CasaDePapel': {qtdPaginas: 385, autor: 'Abc', editora: 'PnC'}, 
'BolaDeNeve':{qtdPaginas: 385, autor: 'Abc', editora: 'PnC'}, 
'Zero':{qtdPaginas: 385, autor: 'Abc', editora: 'PnC'}};
return x === undefined ? nomeLivros : nomeLivros[x];

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
> book();
{ CasaDePapel: { qtdPaginas: 385, autor: 'Abc', editora: 'PnC' },
  BolaDeNeve: { qtdPaginas: 385, autor: 'Abc', editora: 'PnC' },
  Zero: { qtdPaginas: 385, autor: 'Abc', editora: 'PnC' } }
>

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
> console.log('O livro ' + nomeLivros + ' tem ' + book('Zero').qtdPaginas + ' páginas!'); //O livro Zero tem 385 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
> console.log('O autor do livro ' + nomeLivros + ' é ' + book('Zero').autor + '!'); //O autor do livro Zero é Abc!

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
> console.log('O livro ' + nomeLivros + ' foi publicado pela editora ' + book('Zero').editora + '!'); //O livro Zero foi publicado pela editora PnC!
