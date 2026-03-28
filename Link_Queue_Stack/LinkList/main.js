




// class Linked{

//     constructor(data){
//         this.head={
//             value:data,
//             next:null
//         }
//         this.tail=this.head
//         this.size=1
//     }

// tailAppend(data){
//     let newnode={
//         value:data,
//         next:null
//     }
//     this.tail.next=newnode
//     this.tail=newnode
//     this.size++

// }


// headAppend(data){
//     let newnode={
//         value:data,
//         next:this.head
//     }
//     this.head=newnode
//     this.size++
// }


// middleCheck(){
//     let slow=this.head
//     let fast=this.head

//     while(fast && fast.next){
//         slow=slow.next
//     fast=fast.next.next
//     }
//     return slow.value
// }

// duplicated(){
//     let current=this.head
//     while(current && current.next){
//         if(current.value === current.next.value){
//             current.next=current.next.next
//             this.size--
//         }else{
//             current=current.next
//         }
//     }


// }


//     inserLinked(index , data){


//         let newnode={value:data ,  next:null}

        
//     if(index=== 1){

//         newnode.next=this.head
//         this.head=newnode
        
//     }else{

//         let current=this.head
//         let count=1

//         while(count < index-1){

//             current=current.next
//             count++
//         }


//         newnode.next=current.next
//         current.next=newnode

//           if (!newnode.next) {
//             this.tail = newnode;
//         }
//     }
//     }


//     reverser(){


//         let prev=null
//         let current=this.head
//         this.tail=this.head

//         while(current){

//             let newnode=current.next

//             current.next=prev
//             prev=current
//             current=newnode
//         }

//          this.head=prev

//    return this
//     }


//     deleteHead(){

//         this.head.next=this.head.next.next

//         this.size--
//     }

//     deleteMiddle(){

//         let prev=null

//         let slow=this.head
//         let fast=this.head

//         while(fast && fast.next){

//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }

//      if(prev){
//         prev.next = slow.next
//     }
//     }

// checkDuplicateWithSet() {
//     let current = this.head;
//     let prev = null;
//     let set = new Set();

//     while (current) {
//         if (set.has(current.value)) {
//             // Duplicate found, remove current node
//             prev.next = current.next;
//         } else {
//             // Not duplicate, add to set
//             set.add(current.value);
//             prev = current;
//         }
//         current = current.next; // Move to next node
//     }

//     return this.head;
// }

   
// }


// let link= new Linked()
// link.tailAppend(1000)
// link.tailAppend(10)
// link.tailAppend(20)
// link.tailAppend(30)
// link.tailAppend(40)
// link.tailAppend(1000)
// // link.checkDuplicateWithSet()
// // link.deleteMiddle()
// // link.deleteHead()
// // link.reverser()
// // link.inserLinked(1 , 1000)
// // link.tailAppend(40)
// // link.duplicated()
// // console.log(link.middleCheck())
// // link.headAppend(100)

// console.log(link)
