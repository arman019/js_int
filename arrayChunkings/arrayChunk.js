// my code 
const FirstChunkArr = (array, len) => {
    //console.log(array, ' ', len)
    let copiedArray = array
    let tempArray = []
    let checkArray

    //console.log(copiedArray)

    for (let i = 0; i < array.length; i++) {      
        checkArray = copiedArray.slice(i, i + len)
        tempArray.push(checkArray)
        i = i + (len-1)
    }    

    //console.log(tempArray)

    return tempArray

}
 


/*  
HAVE ISSUES

const TutorialFirstChunkArr=(arrays,size)=>{
const chunked = []
console.log(array,' ',size)

    for (const element of arrays) {
        let lastElement = chunked[chunked.length-1]

        if(!lastElement || chunked.length === size){
            chunked.push([element])
            
        } 
        else{
            lastElement.push(element)
        }
    
}
    return chunked

}
 */

const TutorialSecondChunkArr = (array ,size) =>{
    const chunked = []
    let index=0

    while(index < array.length){
        chunked.push(array.slice(index,index+size))

        index= index+size
    }

    return chunked
}


const array = [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const len = 5

//console.log(FirstChunkArr(array, len))
//console.log(TutorialFirstChunkArr(array, 2))
console.log(TutorialSecondChunkArr(array, len))