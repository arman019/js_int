const firstPalindrome = (str) => {

    let copiedStr = str.toLowerCase().replace(/[^\w\s]/gi, '')
    copiedStr = copiedStr.replace(/\s/g, "")
    const len = Math.ceil(copiedStr.length / 2)

    let tempStrfirst = ''
    let tempStrsec = ''
    
    console.log('copiedStr ', copiedStr)
    console.log(len)

    if (copiedStr.length % 2 !== 0) {
        for (let i = 0; i < copiedStr.length; i++) {

            if (i >= len - 1) {
                console.log('i in big',i);
                tempStrsec = copiedStr[i] + tempStrsec
            }
            if (i < len) {
                console.log('i in small', i);

                tempStrfirst = tempStrfirst + copiedStr[i]
            }
        }

    } else {
        for (let i = 0; i < copiedStr.length; i++) {

            if (i >= len) {
                tempStrsec = copiedStr[i] + tempStrsec
            }
            else {
                tempStrfirst = tempStrfirst + copiedStr[i]
            }
        }
    }

    console.log('tempStrfirst', tempStrfirst)
    console.log('tempStrsec', tempStrsec)
    if (tempStrfirst === tempStrsec) {
        return true
    }
    return false
}

const tutorialPalindrome = (str) => {
   return str.split('').every((char,index)=>{
       console.log(char)
       return char === str[str.length- index - 1]
    })
}

const str = "abba"

//console.log(tutorialPalindrome(str))
console.log(firstPalindrome(str))

