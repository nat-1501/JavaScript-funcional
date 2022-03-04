function logParams(a, b, c, d) {
    console.log(a, b, c, d)
}

logParams(1, 2, 3, 4, 5)

function defaultParams(a = 1, b = 3, c) {
    console.log(a, b, c)
}

defaultParams()
// spread /rest
function logNums(...nums) {
        console.log(nums)
    }

logNums(1, 2, 3, 4, 5, 6)

function sumAll(...nums)  {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8))