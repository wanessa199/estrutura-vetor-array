//let diasDaSemana = ["Domingo", "segunda", "terça"]
//diasDaSemana[3] = "quarta"
//diasDaSemana[4] = "quinta"
//diasDaSemana[5] = "sexta"
//diasDaSemana[6] = "sabado"
//console.log(diasDaSemana)

//let numeros = []
//numeros[0]= parseFloat(prompt("Digite um número")) 
//numeros[1]= parseFloat(prompt("Digite um número")) 
//console.log(numeros)

//selecionando elemento de um array - vetor
// const num = [8,6,3,7,9]
// //           0,1,2,3,4

// console.log(num[4])
// console.log(num[0] * 8)

const tempAnual = []

for(let i = 0; i < 3; i++ ){
tempAnual[i] = parseFloat(prompt("digite a temperatura do mês"))
}
console.log(tempAnual)
for(let i = 0; i< 3; i++) {
    console.log(tempAnual[i] + 2)
}