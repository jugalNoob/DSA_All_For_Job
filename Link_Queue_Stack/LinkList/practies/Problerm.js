class LINKED {

  constructor(data) {
    if (data !== undefined) {
      this.head = {
        value: data,
        next: null
      }
      this.tail = this.head
      this.size = 1
    } else {
      this.head = null
      this.tail = null
      this.size = 0
    }
  }

  append(data) {
    let newnode = {
      value: data,   // ✅ fixed
      next: null
    }

    if (!this.head) {
      this.head = newnode
      this.tail = newnode
    } else {
      this.tail.next = newnode
      this.tail = newnode
    }

    this.size++
  }

prepend(data) {
    let newnode = {
      value: data,
      next: this.head
    }

    if (!this.head) {   // ✅ check BEFORE assigning
      this.tail = newnode
    }

    this.head = newnode
    this.size++
  }
}


let link = new LINKED()

link.prepend(10)
link.append(20)
link.append(30)
link.append(40)

console.log(link)