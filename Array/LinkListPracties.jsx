class  LinkEd{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.size=1
    }
    //#endregion

    AppandNode(data){
        let newNode={
            value:data,
            next:null
        }
        this.tail.next=newNode
        this.tail=newNode
        this.size++
    }

    
    fastSlow(){

        

    }


}


const link=new LinkEd(10)

link.AppandNode(20)

link.AppandNode(30)

link.AppandNode(40)

link.ThisPracties()

link.Thistail()
console.log(link)
