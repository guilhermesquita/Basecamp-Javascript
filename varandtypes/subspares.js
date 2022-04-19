function subsPares(arr){

    let qunt = arr.length; // tamanho da array

    if (!qunt) return -1; // Caso o array seja vazio

    for(let i = 0; i < qunt; i++){ 
        if(arr[i] === 0){ 
            console.log("Você já é zero") // CASO JÁ TENHA UM ZERO NO ARRAY
        } else if(arr[i] % 2 === 0 ){
            console.log(`Substituindo ${arr[i]} por 0...`) // Subustituição dos pares por 0
            arr[i] = 0;
        } 
    }

    return arr
}

let array = [1,2,3,4,5,6,7,8,9]

console.log(subsPares(array))

let array1 = []
console.log(subsPares(array1))