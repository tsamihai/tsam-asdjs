function Stack(){
     this.myarray= [];
}
var a = new Stack;
Stack.prototype.push= function(e){this.myarray.push(e)}
Stack.prototype.pop = function(){return this.myarray.pop()}
Stack.prototype.peek = function(){return this.myarray[this.myarray.length-1];}
Stack.prototype.isEmpty = function(){return this.myarray.length==0}

function callback(x){
    console.log(x);
}

Stack.prototype.popall = function(callback){
    while(!this.isEmpty()){
      callback(this.pop());  
    }  
}


function dec2bin(d){
    var quoziente = 0;
    var resto = 0;
    var decimale = d;
    var binario = [];
    do{
        resto = decimale % 2;
        decimale = decimale/ 2;
        quozionte = Math.floor(decimale);
        binario.push(resto);     
    }while(quoziente!= 0)
     var risultato = "il binario è:";
    while(binario.length > 0 ){
        return risultato + binario.pop().toString;
    }
    
}
