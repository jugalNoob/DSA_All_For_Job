function JiiterClass(base , i , maxnum){

    let jit=Math.floor(base+Math.pow(2 , i  ),maxnum )

    let account=Math.random*jit 

    



}





// class DBConnection{
//     static instance=null
//     constructor(databse){
//         if(DBConnection.instance) return DBConnection.instance
//         this.databse=databse
//         DBConnection.instance=this
//     }

//     CheckConnect(){
//         console.log(this.databse)
//     }
// }

// let link=new DBConnection('Database Connetec123')
// let link2=new DBConnection('Jugal shjarma Database')
// link.CheckConnect()
// link2.CheckConnect()
// console.log(link === link2)