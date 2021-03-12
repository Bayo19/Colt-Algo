class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = this.last = null
        this.size = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (this.size == 0) {
            this.first = this.last = newNode
            this.size += 1
            return this.size

        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
            this.size += 1
            return this.size
        }
    }

    pop() {
        if (this.size == 0) return null
        let temp = this.first
        if (this.size = 1) {
            this.last = null
        }
        this.first = this.first.next
        return temp.val
    }
}

let kyoudai = new Stack
kyoudai.push('tanaka')
kyoudai.push('papa')
kyoudai.pop()
console.log(kyoudai)