

function addDigits(number){
 
    let totalOfDigits = 0;
    let stringOfNumber = number.toString()

    for(let i = 0 ; i < stringOfNumber.length ; i++ ){

        totalOfDigits += parseInt(stringOfNumber.charAt(i)) 

    }

    console.log(totalOfDigits)
}

addDigits(689)