// Singly Linked List

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.length = 0
        this.head = this.tail = null
    }

    push(val) {
        if (!this.head) {
            let newNode = new Node(val)
            this.head = this.tail = newNode
            this.length += 1
        } else {
            let newNode = new Node(val)
            this.tail.next = newNode
            this.tail = newNode
            this.length += 1
        }
    }

    pop() {
        if (!this.head) return undefined

        let current = this.head
        let newTail = current
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length -= 1
        if (this.length == 0) this.head = this.tail = null
        console.log('Popped: ', current, '\n')
    }

    shift() {
        if (!this.head) return undefined
        let current = this.head
        this.head = current.next
        this.length -= 1
        console.log('Shifted', current, '\n')
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) this.head = this.tail = newNode
        newNode.next = this.head
        this.head = newNode
        this.length += 1
    }

    get(position) {
        if (position < 0 || position >= this.length) return null
        let current = this.head
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current
    }

    set(position, val) {
        let node = this.get(position)
        if (node) node.val = val
        return val
    }

    insert(position, val) {
        if (position < 0 || position > this.length) return false
        if (position === this.length) return this.push(val)
        if (position === 0) return this.unshift(val)
        let newNode = new Node(val)
        let beforeNode = this.get(position - 1)
        let afterNode = beforeNode.next
        beforeNode.next = newNode
        newNode.next = afterNode
        this.length += 1
        return true
    }

    remove(position) {
        if (position < 0 || position > this.length) return undefined
        if (position === this.length - 1) return this.pop()
        if (position === 0) return this.shift
        let removedNode = this.get(position)
        let beforeNode = this.get(position - 1)
        let afterNode = this.get(position + 1)
        beforeNode.next = afterNode
        this.length -= 1
        return removedNode
    }

    reverse() {
        if (!this.head) return null
        if (this.length == 1) return this.head
        let current = this.head
        this.head = this.tail
        this.tail = current
        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this
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

let fight = new LinkedList

fight.unshift('stein')
fight.unshift('lobster')
fight.push('godstone')
fight.insert(3, 'poo diner')

fight.insert(3, 'mono')
fight.insert(4, 'glowbro')
fight.print()
fight.reverse()
fight.print()