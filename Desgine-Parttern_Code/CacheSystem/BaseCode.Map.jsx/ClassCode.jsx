class LinkList{

    constructor(data , user){
        this.data=data
        this.user=user
    }

    findNumber(age){
        if(age === this.data){
            console.log('new age' , age)
        }else{
                 console.log('age is not define' , age)
        }
    }

}


let link=new LinkList(18 , 'jugal')

link.findNumber(18)

console.log(link)