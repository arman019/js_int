class Queue{
    constructor(){
        this.arr=[]
    }

    add(value){
        this.arr.unshift(value)
    }

    remove(value){
        return this.arr.pop()
    }
}

