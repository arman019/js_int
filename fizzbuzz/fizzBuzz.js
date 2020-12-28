let val = 30+1

while( val >1){
    val = val-1
    if (val % 3 === 0 && val % 5 === 0 ){
        console.log('fizzbuzz')
    }
    else if (val % 5 === 0 && val % 3 !== 0 ){
        console.log('buzz')
    }
    else if (val % 3 === 0 && val % 5 !== 0){
        console.log('fizz')
    }
    else{

        console.log(val)
    }

}