// strategy factory Adapter 



class stripaiorginal{
     payment(order){
        console.log('strip your payment'  , order)
     }
}


class googleaiorginal{
     payment(order){
        console.log('google your payment'  , order)
     }
}



class factory{

    static notfication(type){

        if(type === 'strip'){
            return new stripaiorginal()
        }



        if(type === 'google'){
               return new  googleaiorginal()
        }
    }

}


class servicepay{

    constructor(stripapi){
        this.stripapi=stripapi
    }

    pay(order){
        this.stripapi.process(order)
    }
}



class strpiAdpetr{
    constructor(strip){
        this.strip=strip
    }


    process(order){
        this.strip.payment(order)
    }
}


class googleAdpetr{
    constructor(google){
        this.google=google
    }


    process(order){
        this.google.payment(order)
    }
}



let test=factory.notfication('strip')
let test1=new strpiAdpetr(test)
let test2=new servicepay(test1)
test.payment(10000)
