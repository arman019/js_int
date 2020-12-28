const firstMatrixSpiral = (numb) => {
    let arr = []
    let res = 0
    let temp = []
    let counter = 0
    let check=0
    for (let i = 0; i < numb; i++) {

        for (let j = 0; j < numb; j++) {
           
            res = res + 1
            temp.push(res)
            counter+=1       
        }
        //console.log('temp ',temp)
        arr.push(temp.slice(check,counter))
        //console.log(' after temp ', temp.slice(check, counter))
        check+=numb
        //console.log('check ',check)
    }

    console.log(arr)
}


const tutorialFirstSpiral = (n)=>{
  
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}

const numb = 4
console.log(tutorialFirstSpiral(numb))
//firstMatrixSpiral(numb) 