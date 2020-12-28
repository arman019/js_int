const firstCapitalization = (str)=>{

    let copiedStr =''+str.trim()
    let resStr = ''
    let ch =[]
    /* for (let i = 0; i < copiedStr.length; i++) {
        ch[i] = copiedStr.split(' ')
    } */
    ch = copiedStr.split(' ')
    
    for (let element of ch) {
      element = element[0].toUpperCase()+element.slice(1,element.length)
        resStr = resStr+element+' '
    }

   // console.log(resStr)

   return resStr

  

}

const sentence = 'hi there, how is it going?'

//console.log(firstCapitalization(sentence))

/* const val = '23'
console.log(val.toUpperCase())  ans= 23 it wont error */