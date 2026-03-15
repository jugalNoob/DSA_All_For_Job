class LRUCache{

    constructor(){
  this.capcity=capcity
  this.map=new Map()
    }

    get(key){
        if(!this.map.has(key)) return -1
        const vaul=this.map.get(key)
        this.map.delete(key)
        this.map.set(key , vaul)
        return vaul
    }

    put(key ,value){

        if(this.map.has(key)){
         this.map.delete(key)
        }else if(this.map.size === this.capcity){

            let firstkey=this.map.keys().next().value

            this.map.delete(firstkey)

        }

           this.map.set(key, value);
    }
  

}



5️⃣ Time Complexity


| Operation | Complexity |
| --------- | ---------- |
| get       | O(1)       |
| put       | O(1)       |


That is why LRU cache is popular in system design.