const fruta = [
    {nome: "uva", preco: 12.90, quantidade: 50},
    {nome: "laranja lima", preco: 5.50, quantidade: 120},
    {nome: "abacaxi", preco: 10, quantidade: 12}
]

// .find -> encotra o primeiro elemento correspondente da lista
// .map -> altera todos os elementos da lista
// .filter -> filtra alguns elementos
// .sort -> ordena os elementos
const encontrado = fruta.find ((fruta) => fruta.nome === "uva")
console.log(encontrado)

const filtrado = fruta.filter ((fruta) => fruta.nome === "uva")
console.log(filtrado)

//usar o .map para dar um desconto de 50% no valor das frutas
const frutasComDesconto = fruta.map(item => {
    return {
        ...item,
        preco: item.preco * 0.5 // Aplicando 50% de desconto
    };
});

console.log(frutasComDesconto);

//usar o .sort para ordenar a lista em ordem alfabética
const frutasOrdenadas = fruta.sort((a, b) => {
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;  
    return 0;
});

console.log(frutasOrdenadas);