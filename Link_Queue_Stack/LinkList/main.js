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

  practies(){
 
    let slow=this.head
     let fast=this.head 

     console.log(fast) // 10 
     console.log(fast.next) // 20
console.log(fast.next.next)
    //  debugger;
     while(fast && fast.next){
      slow=slow.next 
      fast=fast.next.next 
     }
 return   slow.value
 // first  loop 
  }


  deleteNodeNth(n){

  let dummy={next:this.head};   //it just a object store next key and this.head value 
  let fast=dummy;
  let slow=dummy;



  let current=this.head
  console.log(current.next) // this how 20 
  console.log(fast.next.next) //why this 20 why not 30

  console.log(fast)


  // start with 1  


    // Step 1: move fast n+1 steps
  for(let i=0; i<=n; i++){
    fast=fast.next
  }



  // step 2 move both 

  while(fast){
    fast=fast.next
    slow=slow.next
  }



  slow.next = slow.next.next;


   this.head = dummy.next;

   this.size++
     return this;

  }



}


let link = new LINKED()

link.prepend(10)
link.append(20)
link.append(30)
link.append(40)
link.deleteNodeNth(1)
// link.deletemiddle()
// console.log(link.practies())

console.log(link)



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
