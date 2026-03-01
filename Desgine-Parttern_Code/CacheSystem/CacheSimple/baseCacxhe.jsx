class Link{

    constructor(data){

        this.cache=new Map()
    }

    setValue(key , value){

        this.cache.set(key , value)
    }

    getValue(key){

    
         if(this.cache.has(key)){

            console.log(this.cache.get(key))
         }else{

                console.log('check Your key data ')
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