// doubly linked list

class Node {
    constructor(val) {
        this.val = val
        this.next = this.prev = null

    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = this.tail = null
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length += 1
        return this
    }

    pop() {
        if (!this.head) return undefined
        if (this.length == 1) {
            this.head = this.tail = null
            this.length += 1
        } else {
            let oldTail = this.tail
            let newTail = oldTail.prev
            newTail.next = null
            this.tail = newTail
            this.length -= 1
            return oldTail
        }
    }

    shift() {
        if (!this.head) return undefined
        if (this.length == 1) {
            this.head = this.tail = null
            this.length -= 1
        } else {
            let oldHead = this.head
            let newHead = oldHead.next
            this.head = newHead
            newHead.prev = null
            this.length -= 1
            return oldHead
        }
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head && !this.tail) {
            this.head = this.tail = newNode
        } else {
            let oldHead = this.head
            oldHead.prev = newNode
            newNode.next = oldHead
            this.head = newNode
        }
        this.length += 1
        return this
    }

    get(position) {
        if (position < 0 || position >= this.length) return null
        let mid = this.length / 2

        if (position <= mid) {
            console.log('work from start')
            let current = this.head
            for (let i = 0; i < position; i++) {
                current = current.next
            }
            return current.val
        } else if (position > mid) {
            console.log('work from end')
            let current = this.tail
            for (let j = this.length - 1; j > position; j--) {
                current = current.prev
            }
            return current.val
        }
    }

    set(position, val) {
        let node = this.get(position)
        if (node) node.val = val
        return true
    }

    insert(position, val) {
        if (position < 0 || position > this.length) return false
        if (position === this.length) return this.push(val)
        if (position === 0) return this.unshift(val)
        let newNode = new Node(val)
        let beforeNode = this.get(position - 1)
        let afterNode = beforeNode.next
    }

    print() {
        let current = this.head
        let arr = []
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
}

let dynamics = new LinkedList
dynamics.push('Atalantics')
dynamics.push('Bronder')
dynamics.unshift('Steenr')

dynamics.print()
console.log(('\n').repeat(3))
console.log('get: ', dynamics.get(2))