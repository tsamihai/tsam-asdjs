/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

Array.prototype.sumuntilnegF = function () {
    var tot = 0;
    this.every( x => { 
        if (x > 0) {
            tot += x;
        }
        return x > 0; 
    });
    return tot;
}
//x tiziano
function ex_1_F(x){
    return sumuntilnegF(x);
}
/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
Array.prototype.media =function (){
	var avg = 0;
		this.every(x => avg += x);
	return avg/this.length;

}

//xtiziano
function ex_3_F(x){
    return media(x);
}
//esercizio9


Array.prototype.ordina = function (){
   var x=[];
   var y = this.length-1;
   for( var i = 0; i < this.length; i++) {
            x[y] = this[i];
            y = y - 1;
   }                            
     return a = x;
}

//per tiziano
function ex_9_F(x){
    return ordina(x);
}


/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.

Array.prototype.caso =function (){
	var risultato = [];
	var odds = [];
	var evens = [];
	this.filter(x => {
		if(x % 2 == 0){
			evens.push(x);
		}else if(x % 2 !== 0){
				odds.push(x);

		return true;
		}
	});
	return risultato.concat(odds,evens);
}
*/
