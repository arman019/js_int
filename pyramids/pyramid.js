const firstPyramids = (numb, row, stairs) => {
    if (row === numb) {
        return
    }

    if (numb === stairs.length) {
        console.log(stairs.split('').slice(1).reverse().join('') + stairs)
        return firstPyramids(numb, row + 1, '')
    }

    if (stairs.length <= row) {
        stairs += '#'
    }
    else {
        stairs += ' '
    }

    firstPyramids(numb, row, stairs)

}

const TutorialFirstPyramid = (value) => {

    let middlePoint = Math.floor((2 * value - 1) / 2)
    console.log(middlePoint)
    for (let row = 0; row < value; row++) {
        let stair = ''
        //derived the column size is 2 * n -1
        for (let col = 0; col < (2 * value - 1); col++) {
            if (col >= (middlePoint - row) && col <= (middlePoint + row)) {
                stair += '#'
            }
            else {
                stair += ' '
            }
        }
        console.log(stair)
    }

}

const testPyramid = (val, row, col, stairs, mid) => {
    if (val === row) {
        return
    }

    if (col === (2 * val - 1)) {
        console.log(stairs)
        return testPyramid(val, row + 1, 0, '', mid)
    }
    if (col >= (mid - row) && col <= (mid + row)) {
        stairs += '#'
    }
    else {
        stairs += ' '
    }

    testPyramid(val, row, col + 1, stairs, mid)

}


const numb = 3
let temp = ''
let rows = 0
let cols = 0
let midPoint = Math.floor((2 * numb - 1) / 2)
//firstPyramids(numb,rows,temp)
//TutorialFirstPyramid(numb)
testPyramid(numb, rows, cols, temp, midPoint)