//uno
function ex_1a(myarray){ 
     if(myarray.length == 0){
        return 0;
     } else {
        return (5 * myarray[0]) + ex_1a(myarray.slice(1));
     } 
} 

function ex_1b(myarray){     
    if(myarray.length == 0){
         return 0;
     }else{
         if(myarray[0] % 2 == 0){
                return (myarray[0] * myarray[0]) + ex_1b(myarray.slice(1));
          }else{
              return ex_1b(myarray.slice(1));
          }
     }
}
//due
function appoggio(myarray){
        if(myarray % 2 == 0)
            return myarray;
}
function ex_2(myarray){
    a = myarray.filter(appoggio);
    return a.map(a => a * a).reduce((a, b) => a + b);
}

/*function powaR(a,b){
    if(b==0){
        return 1;
     } else {
        return mult(a,powaR(a,b-1));
     } 
} 
function range2(n) {
    a = [];
    for(var i = 0; i < n; ++i) {
        a[i] = i;
    }
    return a;
}

function ex_2(n) {
    return range2(n).map(powa(x => 2 * x),range2).reduce((acc, x) => acc + x);
}*/




//tre
function Stack(){
     this.myarray= [];
}
var a = new Stack;
Stack.prototype.push= function(e){this.myarray.push(e)}
Stack.prototype.pop = function(){return this.myarray.pop()}
Stack.prototype.peek = function(){return this.myarray[this.myarray.length-1];}
Stack.prototype.isEmpty = function(){return this.myarray.length==0}
Stack.prototype.popall = function() {
    while (!this.isEmpty()){
        return this.pop();
    }
}
function ex_3(myarray){
    var stackpari = new Stack();
    var stackdispari = new Stack();
    myarray.forEach(x => {
        if (x % 2 == 0){
            stackpari.push(x);
        } else {
            stackdispari.push(x); 
        }
    });

    var stackResult = new Stack();
    while (!(stackpari.isEmpty()) && !(stackdispari.isEmpty())){
        
        stackResult.push(stackpari.pop() * stackdispari.pop());
    }
    return stackResult.popall();
} 



















