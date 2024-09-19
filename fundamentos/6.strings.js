const escola = "Cod3r"

console.log(escola.charAt(4)) //Encontrando a letra dentro da string
console.log(escola.charAt(5)) //Ele não dará erro apenas não printará nada
console.log(escola.charCodeAt(3)) //código ASCII relacionado ao numero

console.log(escola.substring(1)) //Printará a partir do indice 1
console.log(escola.substring(0,3)) //indo do indice 0 até o 3, printa dentro dos parametros dados

console.log('Escola '.concat(escola).concat("!")) //Concatena as strings
console.log(escola.replace(3, 'e')) //Troca o conteudo do indice pela letra especificada

console.log('Lucas,Bia,Jonas'.split(',')) //separando elementos de uma mesma string