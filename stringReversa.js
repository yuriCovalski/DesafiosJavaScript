/*Descrição do problema:
  Faça com que a função reverso pegue o parâmetro string passado e retorne a string
  de forma reversa. Ex:
  entrada
  Teste
  
  saida
  etseT

*/


/*Meus comentários do problema:
    Problema de javascript que encontrei no side coderbyte, um treino para iniciantes
    no javascript. 

*/

function reverso(string)  {
    var stringReversa = string.split("").reverse().join("")
    return stringReversa
}

console.log(reverso('teste 2'))