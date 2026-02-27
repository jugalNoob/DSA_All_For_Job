  print() {
    let curr = this.head;
    let out = [];
    while (curr) {
      out.push(curr.value);
      curr = curr.next;
    }
    console.log(out.join(" → "));
  }
}

const Link=new LinkedList (10)
Link. append(20)
Link. append(30)
Link. append(40)
Link.print()
console.log(Link)