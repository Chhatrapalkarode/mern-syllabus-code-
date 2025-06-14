//importmodule.js
var mymodule={
    sumfun:function(a,b){
        var c;
        c=a+b;
        return c;
    },

    factorial:function(n){
        var i,f=1;
        for(i=1;i<=n;i++){
            f=f*i;
            
        }
        return f;
        
    },

    primes:function(n){
        var i,c=0;
        for(i=0;i<=n;i++){
            if(n%i==0){
                c++;
            }
        }
        if(c==2){
            return ("prime no");
        }
        else{
            return("not prime ");
        }
    }
   

    }



module.exports=mymodule;