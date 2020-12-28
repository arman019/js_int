const firstFib = (numb, memo) => {
    let result

    if (memo[numb]) {
        console.log(memo)
        return memo[numb]
    }

    if (numb === 0 || numb === 1) {
        if (numb === 0) {
            return 0
        }
        return 1

    } else {

        result = firstFib(numb - 1, memo) + firstFib(numb - 2, memo)
    }
    console.log('result ',result)
    memo[numb] = result

    return result


}

const numb = 4

memo = {}

console.log(firstFib(numb, memo))