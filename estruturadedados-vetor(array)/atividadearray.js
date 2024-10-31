//inversa
let n
const vetor = []

n = Number(prompt("Digite a sequência de N"))

for(let i = 0; i < n; i++){
    vetor[i] = Number(prompt("Digite o número para posição : " +i))
}
console.log(vetor)

for(let i = vetor.length - 1; i >= 0; i-- ){
    console.log(vetor[i])

}