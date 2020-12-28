const firstAnnagram = (givenStr, angrmStr) => {
    const copiedStr =''+givenStr.replace(/[^\w]+/gi, "").toLowerCase()
    const copiedAngrm =''+angrmStr.replace(/[^\w]+/gi, "").toLowerCase()

    if (copiedStr.length !== copiedAngrm.length) {
        return false
    }

    let elementsOfCopiedStr = {}
    let elementsOfCopiedAngrm = {}
    
    for (const element of copiedStr) {
        elementsOfCopiedStr[element] = elementsOfCopiedStr[element]+1 || 1      
    }

    for (const element of copiedAngrm) {
        elementsOfCopiedAngrm[element] = elementsOfCopiedAngrm[element] + 1 || 1
    }

    for (const checkElem in elementsOfCopiedStr) {
        if (elementsOfCopiedAngrm.hasOwnProperty(checkElem)){
            //console.log(checkElem, ' ', elementsOfCopiedStr[checkElem],' ', elementsOfCopiedAngrm[checkElem])
            if (elementsOfCopiedAngrm[checkElem] !== elementsOfCopiedStr[checkElem]){
                return false
            }
        }
        else{
            return false
        }
    }
    return true
}


const SecondTutorialAnagram =(strA,strB)=>{
    const copiedStr = strA.replace(/[^\w]+/gi, "").toLowerCase().split('').sort().join('')
    const copiedAngrm = strB.replace(/[^\w]+/gi, "").toLowerCase().split('').sort().join('')

    //let ch = copiedStr.sort().join('')
    //let chb = copiedAngrm.sort().join('')

    if (copiedStr === copiedAngrm){
        return true
    }

    return false


}

const givenSentence = 'rai\'l safety!'
const anagramSentence = 'fairy tales!'

//console.log(firstAnnagram('1122', '2213'))

console.log(SecondTutorialAnagram('1122', '2213'))