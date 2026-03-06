class Queue{

    constructor(){
        this.data=[]
        this.front=0
        this.current=0
    }


    appendqueue(value){

        this.data[this.current]=value
        this.current++
    }

    deletQueu(){

        let remove=this.data[this.front]
        this.front++
        return remove
    }

  isEmpty() {
        return this.front === this.rear
    }
    display(){
        
        for(let i=this.front; i<this.current; i++){

            console.log(this.data[i])
        }
    }
}



let link=new Queue(10)
link.   appendqueue(10)
link.   appendqueue(20)
link.   appendqueue(30)
link.   appendqueue(40)

link.deletQueu()
link.deletQueu()
link.display()
console.log(link)

