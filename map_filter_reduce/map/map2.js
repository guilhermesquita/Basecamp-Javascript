function mapWithoutThis(arr){
    return arr.map(function (item) {
        return item * 2;
    })
}

const nums = [2, 4, 6, 8, 10];


console.log(nums + ' => ' + mapWithoutThis(nums))
//SAIDA: 2, 4, 6, 8, 10 => 4,8,12,16,20