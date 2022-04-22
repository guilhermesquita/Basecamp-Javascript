const maca = {
    value : 2,
}

const laranja = {

    value: 3,

}

function mapWithThis(arr, thisArg){
    return arr.map(function(item){

        return item * this.value

    }, thisArg)
}

const nums = [1,2]

console.log(mapWithThis(nums, maca));

console.log(mapWithThis(nums, laranja));