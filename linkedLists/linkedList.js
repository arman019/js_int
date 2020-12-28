class LinkedList{
    constructor(){
        this.head = null
        this.tail = null

    }

    append(value){
        const newNode = {value:value , next:null}
        if(this.head === null){
            this.head = newNode
        }

        if(this.tail !== null){
            this.tail.next = newNode
        }
        this.tail=newNode
    }

    prepend(value){
        const newNode = { value: value, next: this.head }

        this.head = newNode

        if (this.tail === null) {
            this.tail = newNode
        }
      
    }


    arrayForm() {
        let listArr = []
        let startNode = this.head
        while (startNode) {
            listArr.push(startNode)
            startNode = startNode.next
        }

        return listArr
    }



}

const list = new LinkedList()

list.append(5)
/* list.append(6)
list.append(7)
list.append(8) */
list.prepend(3)

console.log(list.arrayForm())