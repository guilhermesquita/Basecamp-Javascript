function verificaPalindromo(string){
    if (!string) return; //caso o valor seja null
    

    return string.split("").reverse().join("") === string; //verificação se a string é um palindromo com TRUE ou FALSE
}

console.log(verificaPalindromo("ovo")) //retornará true