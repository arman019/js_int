class Stack {
    constructor() {
        this.head = null
        this.tail = null
    }

    push(value) {
        const newNode = { value: value, next: this.head }
        this.head = newNode
        if (this.tail === null) {
            this.tail = newNode
        }
    }

    pop() {
        if (this.head === null) {
            return null
        }

        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            return null
        }
        let temp = this.head.value
        this.head = this.head.next

        return temp

    }

    removeTail() {
        if (this.head === null || this.tail === null) {
            return null
        }

        while (this.head && this.head == this.tail) {
            let temp = this.head.value
            this.head = null
            this.tail = null
            return temp
        }

        let currNode = this.head

        while (currNode.next) {
            if (currNode.next === this.tail) {
                let res = this.tail.value
                this.tail = currNode
                this.tail.next = null
                return res
            }
            currNode = currNode.next
        }


    }

    toArray() {
        let list = []

        let currNode = this.head
        while (currNode) {
            list.push(currNode.value)
            currNode = currNode.next
        }

        return list
    }
}


class Queue {

    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(value) {
        this.stack1.push(value)
    }

    dequeue() {
        if (this.stack1.toArray().length > 0) {
            for (const elem of this.stack1.toArray()) {
                this.stack2.push(elem)
            }
        }

        this.stack1.removeTail()

        return this.stack2.pop()
    }

    toArray() {
        return this.stack1.toArray()
    }


}



const queue = new Queue()

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.toArray())


/*  const stack = new Stack()

 stack.push(5)
 stack.push(6)
 stack.push(7)
 stack.push(8)
 stack.push(9)

 console.log(stack.removeTail())
 console.log(stack.removeTail())
 console.log(stack.toArray())
 */