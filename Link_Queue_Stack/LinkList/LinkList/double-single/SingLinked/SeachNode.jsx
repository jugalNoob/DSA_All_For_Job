   search(value) {
    let current = this.head
    while (current) {
        if (current.value === value) {
         return {
            SearchcurerntNode:current,
            sucssec:true
         }
        }
        current = current.next
    }

    return false
}