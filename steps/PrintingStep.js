
const TutorialFirstPrintingStep = (numb,row,stairs='')=>{
    if (row === numb){
        return
    }

    if(numb === stairs.length){
        console.log(stairs)
        return TutorialFirstPrintingStep(numb,row+1,'')
    }

    if(stairs.length <= row){
        stairs+='#'
    }
    else{
        stairs+=' '
    }

    TutorialFirstPrintingStep(numb,row,stairs)

}


const num =4
let temp=''
let rows = 0

console.log(TutorialFirstPrintingStep(num,rows,temp))
