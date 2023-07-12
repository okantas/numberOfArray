

function addDigits(number){
 
    let totalOfDigits = 0;

    //turn the number as a string form
    let stringOfNumber = number.toString()

    for(let i = 0 ; i < stringOfNumber.length ; i++ ){

        //charAt give the oppotunity to select characters one by one

        totalOfDigits += parseInt(stringOfNumber.charAt(i)) 

    }

    console.log(totalOfDigits)
}

addDigits(689)