


let isPrime = true

function findPrimeNumber(number){

    for(let i = 2; i < number ; i++ ){

        if(number%i == 0 ){
            isPrime = false
        }
    }  

    if(isPrime == false){
        console.log(`${number} is not prime number`)
    }
    else{
        console.log(`${number} is prime number`)
    }
}


findPrimeNumber(19)

