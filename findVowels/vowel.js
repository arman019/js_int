const firstFindVowel = (str) => {
    let copiedStr = str.replace(/[^\w]/gi, '')
    // console.log(copiedStr.split('').sort())
    copiedStr = copiedStr.split('').sort()
    let strObj = {}
    let counter = 0
    const letters = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < copiedStr.length; i++) {
        if (letters.includes(copiedStr[i])) {
            strObj[copiedStr[i]] = strObj[copiedStr[i]] + 1 || 1
            counter++
        }
    }

    console.log('total vowel', counter, ' ', strObj)

}

const sentence = 'Hi There!'

firstFindVowel(sentence.toLowerCase())