let data=[]
let Current=data.length

function Queue(value)
{
    data[Current]=value
Current++
}

function DeleteQ(){
    for(let i=0; i<data.length; i++){
        // console.log(data)
    data[i]=data[i+1]
    }

}



function display(){
    for(let i=0; i<data.length; i++){
        console.log(data[i])
    }
}



Queue(10)
Queue(20)
Queue(30)
Queue(40)
DeleteQ()

display()

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


let data = [];
let front = 0;   // remove from here
let rear = 0;    // add from here

function Addqueu(value) {
    data[rear] = value;
    rear++;
}

function delele() {
    if (front === rear) {
        console.log("Queue is empty");
        return;
    }
    const removed = data[front];
    data[front] = undefined; // optional
    front++;
    console.log(removed, "removed from queue");
}

function display() {
    if (front === rear) {
        console.log("Queue is empty");
        return;
    }
    console.log("Current Queue:");
    for (let i = front; i < rear; i++) {
        console.log(data[i]);
    }
}

// Example
Addqueu(10);
Addqueu(20);
Addqueu(30);
Addqueu(40);
Addqueu(50);
Addqueu(60);
delele();
delele();
display();



Q::what is queue?

ANSA:Javascript 

let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    alert("Queue is already full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.warn(queue);
}
function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("queue is already empty");
  }
}

enqueue(10);
enqueue(20);
enqueue(30);
dequeue()
dequeue()
dequeue()
dequeue()
display();


//Circular queause in Javascript

   class Queue {
        constructor(size) {
          this.max = size;
          this.items = new Array(size);
          this.currentSize = 0;
          this.rear = -1;
          this.front = -1;
        }
        enqueue(val) {
          if (this.currentSize != this.max) {
            if (this.rear == this.max - 1) {
              this.rear = 0;
            } else {
              this.rear++;
            }
            this.items[this.rear] = val;
            this.currentSize++;
            if ((this.front == -1)) {
              this.front = this.rear;
            }
          }
        }
        dequeue(){
            if(this.currentSize!=0){
                this.items[this.front]=null;
                if(this.front==this.max-1){
                    this.front=0;
                }else{
                    this.front++;
                }
                this.currentSize--;
                
            }else{
                this.front=-1;
                this.rear=-1;
                alert("queue is empty")
            }
        }
      }

      let queue = new Queue(5);


        queue.enqueue(10)

  queue.enqueue(20)
  queue.enqueue(30)
  queue.enqueue(40)
  queue.enqueue(50)

  queue.dequeue()
  queue.dequeue()
  console.log(queue)



  ////////////////////FIXME - 


  <html>
  <head>
    <title>Queue in JavaScript</title>
    <script>
      let queue = [];
      let currentSize = queue.length;
      let maxSize = 5;

      // function enqueue(newVal) {
      //   if (currentSize >= maxSize) {
      //     alert("Queue is already full");
      //   } else {
      //     queue[currentSize] = newVal;
      //     currentSize++;
      //   }
      // }

      function enqueueWithBtn() {
        let newVal = document.getElementById("qEl").value;
        if (currentSize >= maxSize) {
          alert("Queue is already full");
        } else {
          queue[currentSize] = newVal;
          currentSize++;
        }
      }

      function display() {
        console.warn(queue);
      }
      function dequeue() {
        if (!isEmpty()) {
          for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
          }
          currentSize--;
          queue.length = currentSize;
        } else {
          alert("queue is already empty");
        }
      }
      function front() {
        if (!isEmpty()) {
          console.warn(queue[0]);
        } else {
          alert("queue is already empty");
        }
      }

      function rear() {
        if (!isEmpty()) {
          console.warn(queue[currentSize - 1]);
        } else {
          alert("queue is already empty");
        }
      }
      function isEmpty() {
        if (currentSize <= 0) {
          return true;
        } else {
          return false;
        }
      }

      // enqueue(10);
      // enqueue(20);
      // enqueue(30);

      // front();
      // rear();

      // display();
    </script>
  </head>
  <body>
    <h1>Queue with input elements in JavaScript</h1>
    <input placeholder="enter element" id="qEl" />
    <button onclick="enqueueWithBtn()">Add Element</button>
    <br/><br/>
    <button onclick="dequeue()">Remove Element</button>
    <button onclick="display()">Display</button>
    <button onclick="front()">Get Front Element</button>
    <button onclick="rear()">Get Rear Element</button>


  </body>
</html>
