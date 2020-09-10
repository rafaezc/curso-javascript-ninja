/*
Crie um array com 5 items (tipos variados).
*/
> var array5 = ['false', 'String', 26, {nome: 'aleatorio'}, function funcAl() {}];

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
> function array5Push(x) {
... array5.push(x);
... console.log(array5);
... }

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
> array5Push(['manga', 'tangerina', 'abacaxi'], {modelo: 'Kombi', marca: 'VW'}, function soma(x, y) {return x + y;});
[ 'false',
  'String',
  26,
  { nome: 'aleatorio' },
  [Function: funcAl],
  'abracadabra',
  [ 'manga', 'tangerina', 'abacaxi' ] ]

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
> console.log('O segundo elemento do segundo array é ' + array5[6][1] + '.'); //O segundo elemento do segundo array é tangerina.

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
> console.log('O primeiro array tem ' + array5.length + ' itens.'); //O primeiro array tem 10 itens.

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
> console.log('O segundo array tem ' + array5[9].length + ' itens.'); //O segundo array tem 3 itens.

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
  > while (numeros < 20) {
... if (numeros % 2 === 0) {
..... console.log('Números pares entre 10 e 20: ' + numeros);
..... }
... ++numeros;
... }


/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
  > while (numeros < 20) {
... if (numeros % 2 !== 0) {
..... console.log('Números ímpares entre 10 e 20: ' + numeros);
..... }
... numeros++;
... }

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
 > for (numeros = 100; numeros <= 120; numeros++) {
... if (numeros % 2 === 0) {
..... console.log('Números pares entre 100 e 120: ' + numeros);
..... }
... }

> for (numeros = 111; numeros <= 125; numeros++) {
... if (numeros % 2 !== 0) {
..... console.log('Números ímpares entre 111 e 125: ' + numeros);
..... }
... }
