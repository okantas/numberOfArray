
const nums = [4,2,0,1]
const n = nums.length

function findExpectedSum(nums){

    return n*(n+1)/2 

}

function findActualSum(nums){

    let actualSum = 0
    for(let i = 0 ; i < n ; i++){

       actualSum +=nums[i]
        
    }
    return actualSum

}

function findMissingNumber(nums){

   return findExpectedSum(nums)-findActualSum(nums)

}


const missingNumber = `Missing Number is ${findMissingNumber(nums)}`
console.log(missingNumber)

