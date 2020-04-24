class Paynent{
    constructor(productPrice,discount,userMembership){
        this.productPrice=productPrice,
        this.discount=discount,
        this.userMembership=userMembership
        this.onlinePayment=0
       

    }


    calculation(){
       
        let productPrice=this.productPrice
        let discount=(productPrice/100)*this.discount
        let userMembership=this.userMembership
        let elbaqeBadElkasm=productPrice-discount
        let qemaelkasm=discount
        let luvinamony=qemaelkasm*(50/100)

        this.elkasm=function(){
            if(this.discount>=15 && this.userMembership==="silver"){
             this.onlinePayment=3.5
                return 2/5
              
            }else if (this.discount>=10 && this.userMembership==="silver"){
                this.onlinePayment=3.5
                return 1/4
            }else if (this.discount>=5 && this.userMembership==="silver"){
                return 0
            }
            else if (this.discount<5 && this.userMembership==="silver"){
                this.onlinePayment=0
                return 0
            }
        }
        let elbake=qemaelkasm-(luvinamony+this.onlinePayment)
        let shownPrice=productPrice-(elbake*this.elkasm())







        console.log(`user member is ${userMembership}`);
        
         console.log(`qema alkasm  ${qemaelkasm} egp`);
         console.log(`elbaqeBadElkasm  ${elbaqeBadElkasm} egp`);
        console.log(`luvinamony = ${luvinamony}`);
        
        console.log(`elbake bad kasm luvinamony and online payment = ${elbake}`);

        console.log(`qema alkasm for user member ${this.elkasm()}`);
        
        console.log(`final price  ${shownPrice}`);
        
        
    } 
}

 const pay1=new Paynent(200,4,'silver')

 console.log(pay1.calculation());
 