var numero = "10110011".split('').reverse().join('');
var contador = 0;
var decimal = 0;
while (contador < numero.length) {
    inteiro = parseInt(numero.charAt(contador), 10)
    decimal += 2**contador * inteiro 
    contador += 1

}

// resultado
console.log(decimal)

