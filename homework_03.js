/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

Array.prototype.ex_1 = function () {
    var tot = 0;
    this.every( x => { 
        if (x > 0) {
            tot += x;
        }
        return x > 0; 
    });
    return tot;
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
Array.prototype.ex_3 =function (){
	var avg = 0;
		this.every(x => avg += x);
	return avg/this.length;

}
//esercizio9
/*
Array.prototype.ex_9 = function (){
   var x=[];
   var y = this.length-1;
   for( var i = 0; i < this.length; i++) {
            x[y] = this[i];
            y = y - 1;
   }                            
     return a = x;
}
*/
/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
*/
Array.prototype.ex_11 =function(){
	var pari = [];
	
	pari = this.filter(function (x){
		if(x%2 == 0)
			return x;
		
	});
	var disp = [];
	disp = this.filter(function (x){
		if(x%2 != 0)
			return x;
		
	});
	return disp.concat(pari);
	
}

