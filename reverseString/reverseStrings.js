const revString = (str) => {
let temp =[]

    for (let i = 0; i <=str.length ; i++) {
        temp[i] = str[str.length -i]
    }

    return temp.join('')


}


const anotherRevString =(str)=>{
    return str.split('').reduce((rev,char)=>{
        console.log('rev',rev)
        return char+rev}
        ,'1')
}




let str = 'GREETINGS!'

//console.log(revString(str))
console.log(anotherRevString(str))


/* 
Another way

let reservedTemp = ''

for (const iterator of str) {

    reservedTemp = iterator + reservedTemp
    console.log(reservedTemp)

} */