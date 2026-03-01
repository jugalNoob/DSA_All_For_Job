class Link{

    constructor(tit=5000){

        this.cache=new Map()
        this.tit=tit

    }
 
    setValue(key , value){

        let expireKey= Date.now() + this.tit
        this.cache.set(key ,  {expireKey , value})
    }

    getValue(key){

       const item = this.cache.get(key);
       console.log(item)
        if (!item) return null;
         if(Date.now() > item.expireKey){
  this.cache.delete(key); // expired
            console.log('Cache expired'); 
         }else{
         console.log('check Your key data ')
         console.log('Cache hit ', item.value);
         }
    }


    delValue(key){
        if(this.cache.delete(key)){
            console.log('delete Key')
        }else{
          console.log('check Your key Key')

        }
    }
        // Loop all key-value pairs

 loopValue() {
        console.log('All cache entries:');
        for (let [key, value] of this.cache.entries()) {
            console.log(`${key} : ${value}`);
        }
    }

}




const link=new Link()


// Set keys
link.setValue('name', 'Jugal Sharma');
link.setValue('name_1', 'Karan Sharma');
link.setValue('name_2', 'Anku Sharma');

setTimeout(() => {
    console.log(ttlCache.get('token')); // May be "Cache expired"
}, 4000);


// Get key
link.getValue('name'); // Output: Jugal Sharma

// Delete key
link.delValue('name');
link.getValue('name'); // Output: Check your key data

// Loop all remaining keys
link.loopValue();
// Output:
// name_1 : Karan Sharma
// name_2 : Anku Sharma

console.log(link);