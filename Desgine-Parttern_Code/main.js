class Linked{
    static instance=null 
    constructor(connect){
        if(Linked.instance) return Linked.instance
        this.connect=connect
        Linked.instance=this
    }


    DBConnect(){
        console.log(this.connect)
    }
}

let link=new Linked('connection1')
link.DBConnect()
let link1=new Linked('connection2')
link1.DBConnect()
console.log(link === link1)