const numeros = [10,50,100,202,30]
// filter ->
const filtro = numeros.filter ((n) => n < 100)
console.log (filtro)

// ordenar uma lista
lista = ["fusca","uno","palio","celta","opala"]
const ordenado = lista.sort()
console.log(ordenado)
const numerosOrdenadas = numeros.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
})
console.log (numerosOrdenadas)