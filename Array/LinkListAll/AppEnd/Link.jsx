class LINK {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail = this.head
        this.size = 1
    }

    AppendNode(data) {
        let newNode = {
            value: data,
            next: null
        }

        this.tail.next = newNode
        this.tail = newNode
        this.size++
    }

    HeadAppend(data) {
        let newNode = {
            value: data,
            next: this.head   // 🔥 important line
        }

        this.head = newNode
        this.size++
    }
}

const link = new LINK(10)
link.HeadAppend(100)
link.AppendNode(20)
link.AppendNode(30)
link.AppendNode(40)

console.log(link)
