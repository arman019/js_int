/* class Queue {
    constructor() {
        this.arr = []
        this.head
    }

    add(value) {
        this.arr.unshift(value)
    }

    remove() {
            this.arr.pop()
    }

    toArray(){
        let list=[]
        for (const elem of this.arr) {
            list.push(elem)
        }
        return list
    }
}

const queue1 = new Queue()

queue1.add(5)
queue1.add(7)
queue1.add(8)
queue1.add('kappa')
queue1.add('hello')
 */


// not in Turtorial but used maxmilian's linked list to create custom made queue
class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    append(value) {
        const newNode = { value: value, next: null }
        if (this.head === null) {
            //console.log('here')
            this.head = newNode
        }

        if (this.tail !== null) {
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    add(val) {

        const newNode = { value: val, next: this.head }

        this.head = newNode

        if (this.tail === null) {
            this.tail = newNode
        }
    }


    remove() {
        if (!this.head) {
            return null
        }

        /*     while (this.head && this.head.value === this.tail.value) {
                this.head = this.head.next
            } */

        if (this.head && this.head.next === null) {
            this.head = null
            this.tail = null
        } else {

            let currNode = this.head
            while (currNode.next) {

                if (currNode.next === this.tail) {
                    currNode.next = null
                    this.tail = currNode

                }
                else {
                    currNode = currNode.next
                }
            }

        }

    }

    peek(){
        if (this.tail !== null){
            return this.tail.value
        }
        return null
      
    }

    arrayForm() {
        let listArr = []
        let startNode = this.head
        while (startNode) {
            listArr.push(startNode.value)
            startNode = startNode.next
        }

        return listArr
    }
}


const weave = (queue1,queue2)=>{

  const checkQueue = new Queue()
    let index = 0

    if(queue1.length === queue2.length){

        while (index < queue1.length ) {
            checkQueue.add(queue1[index])     
            checkQueue.add(queue2[index])
            index++
        }

    }
    else if (queue1.length > queue2.length) {

        while (index < queue1.length) {
            checkQueue.add(queue1[index])
            if (queue2[index]) {
                checkQueue.add(queue2[index])
            }
            index++
        }
    }
    else{
        while (index < queue2.length) {
            
            if (queue1[index]) {
                checkQueue.add(queue1[index])
            }
            checkQueue.add(queue2[index])
            index++
        }

    }

    console.log(checkQueue.arrayForm())

   
}


const ch = (q1,q2)=>{
    const q = new Queue()

    q1.add(1)
    q1.add(2)
    q1.add(3)

   // console.log(q1.arrayForm())
   q1.remove()
   q1.remove()
   q1.remove()
   
    console.log(q1.peek())
}


const queue1 = new Queue()

/* queue1.add(1)
queue1.add(2)
queue1.add(3)
 */
const queue2 = new Queue()

/* queue2.add('Hi')
queue2.add('there')
queue2.add('there') */

ch(queue1, queue2)


//weave(queue1.arrayForm(), queue2.arrayForm())

//console.log(queue1.arrayForm())
