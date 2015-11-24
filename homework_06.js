function codac(){
     this.myarray= [];
	 this.top = 0;
	 this.bott = 0;
}
var b = new codac;
codac.prototype.enqueue = function(e){
    this.myarray.bott = e;
    this.bott = this.bott +1;
}
codac.prototype.dequeue = function(){
    valore = this.myarray.top;
    this.top = this.top +1;
    return valore;
}
codac.prototype.front = function(){
    return this.myarray[this.top];
}
codac.prototype.isEmpty = function(){
    return this.myarray.bott == this.myarray.top;
    //return this.myarray.length == 0;
}
codac.prototype.size = function(){
    return  Math.abs(this.bott - this.top);
   //return this.myarray[this.myarray.length-1];
}