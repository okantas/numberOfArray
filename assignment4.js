

function findFactoriel(number){

    let output = 1

    for(let i = 1 ; i<number+1 ; i++){

        output *=i

    }
    return output
}

console.log(findFactoriel(4))