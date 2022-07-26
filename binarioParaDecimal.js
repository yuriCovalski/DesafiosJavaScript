var numero = "10110011".split('').reverse().join('');
var contador = 0;
var contador2 = numero.length;
var decimal = 0;
while (contador < numero.length) {
    inteiro = parseInt(numero.charAt(contador), 10)
    console.log(2**contador * inteiro)
    decimal += 2**contador * inteiro 

    contador += 1

}
console.log(decimal)

