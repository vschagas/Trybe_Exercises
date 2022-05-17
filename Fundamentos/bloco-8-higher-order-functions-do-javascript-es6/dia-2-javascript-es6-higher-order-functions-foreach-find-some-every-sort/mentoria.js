const techProducts = [
    {
        id: 1, // numérico
        name: 'computer', // string
        price: 2100, // number
    },
    {
        id: 2,
        name: 'mouse',
        price: 56,
    },
    {
        id: 3,
        name: 'monitor',
        price: 589,
    },
    {
        id: 4,
        name: 'keyboard',
        price: 78,
    },
    {
        id: 5,
        name: 'HD',
        price: 350,
    },
    {
        id: 6,
        name: 'webcam',
        price: 187,
    },
    {
        id: 7,
        name: 'mic',
        price: 69,
    },
    {
        id: 8,
        name: 'headset',
        price: 216,
    },
];

// * 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

// const retorno = () => techProducts.forEach((element) => {
//     let resultado = [];
//     let object = element.id
//     if(object % 2 === 0){
//         resultado.push(object)
//     }
    
//     return resultado
// })
// console.log(retorno());
    

// console.log(retorno());


// const nome = () => {
//     let arrayObject = [];
//     techProducts.forEach((element) => {
//         let idObject = element.id
//         if(idObject % 2 === 0){
//             arrayObject.push(element.name);
//         };

//     })
//     return arrayObject
// }

const nome = () => {
    techProducts.forEach((element) => {
       let objeto = element.id
        console.log(objeto);
    })
    
}


console.log(nome());



// * 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário


// const preco = () => techProducts.some((element) => element.price > 300)

// console.log(preco());

// * 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// // ex: id: 8 e quantidade: 2 preço total: 432


// const precoFinal = (selecionaId, quantidade) => {
//     let id = techProducts[selecionaId].id;
//     let resultado = techProducts[id].price * quantidade
//     console.log(id);
// }
// console.log(precoFinal(8, 2 ));