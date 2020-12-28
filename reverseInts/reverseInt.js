const firstReversed = (value) => {
    const sign = Math.sign(value)
    let copiedValue = '' + value
    console.log('copiedValue ',copiedValue)

    let tempString = ''
    for (let i = 0; i < copiedValue.length; i++) {
        tempString = copiedValue[i] + tempString

    }

    const result = parseInt(tempString) * sign;
    return result
}

let IntVal = -2359

console.log(firstReversed(IntVal))


