class Stack {
    constructor() {
        this.list = []
    }

    add(value) {
        this.list.push(value)
    }

    pop() {
        if (this.list.length !== 0) {

            return this.list.pop()
        }
    }

    peek() {
        return this.list[this.list.length - 1]
    }

    toArray() {
        return this.list
    }
}


class Queue {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
        this.list = []
    }

    add(value) {
        this.stack1.add(value)

    }

    pop() {
        while (this.stack1.peek()) {
            this.stack2.add(this.stack1.pop())
        }

        const value = this.stack2.pop()
        // console.log(value)

        while (this.stack2.peek()) {
            this.stack1.add(this.stack2.pop())
        }

        return value
    }


    peek() {
        while (this.stack1.peek()) {
            this.stack2.add(this.stack1.pop())
        }

        const value = this.stack2.peek()
        // console.log(value)

        while (this.stack2.peek()) {
            this.stack1.add(this.stack2.pop())
        }

        return value
    }


}


const q = new Queue()

q.add(1)
q.add(2)
q.add(3)

q.add(4)
q.add(5)
q.add(6)

console.log(q.peek())
