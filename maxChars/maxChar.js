const firstmaxChar = (str) => {

    let copiedStr = '' + str.replace(/\s/gi, "")
    console.log(copiedStr)
    let valueObj = {}

    let counter = 0
    let idOfelement=''

    for (const chara of copiedStr) {
        valueObj[chara] = valueObj[chara] + 1 || 1

       
    }

    /* copiedStr.split('').map((obj) => {
        if(valueObj[obj]>counter){
            counter = valueObj[obj]
            idOfelement = obj
        }
    }) */

    for (const element in valueObj) {
        if (valueObj[element] > counter) {
            counter = valueObj[element]
            idOfelement = element
        }
    }

    console.log(idOfelement)


}


const str = 'abcdefghijklmnaaaaa'
console.log(firstmaxChar(str.toLowerCase()))

