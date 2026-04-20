//search Indix simple Factory + Strategy   +Di 


class singlIndex{
    search(){
console.log('single index search ')
    }
}

class compoundIndex{
    search(){
        console.log('multi  search index ')
    }
}


// factory 


class factory{

    static nofication(type){
        if(type === 'single'){
            return new singlIndex()
        }

        if(type === 'multi'){
            return new compoundIndex()
        }
    }
}



class srarchingstartest{
    constructor(stargest){
        this.stargest=stargest
    
}


stargestsearch(){
    this.stargest.search()
}
}


let test=factory.nofication('multi')

let test2=new srarchingstartest(test)

test2.stargestsearch()



class SmartFactory {
    static create(query) {
        if (query.includes('AND')) {
            return new CompoundIndex();
        }
        return new SingleIndex();
    }
}
