/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function sumuntilnegF(myarray) {
    var tot = 0;
    myarray.every( x => { 
        if (x > 0) {
            tot += x;
        }
        return x > 0; 
    });
    return tot;
}

function sumuntilnegF2(myarray) {
    var tmparray = [];
    myarray.every( x => { 
        if (x > 0) {
            tmparray.push(x);
        }
        return x > 0; 
    });
    return tmparray.reduce((acc, x) => acc + x, 0);
}

function buildUntil(myarray, check) {
    var tmparray = [];
    myarray.every( x => { 
        if (check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}

function sumuntilnegF3(myarray) {
    return buildUntil(myarray, x => x > 0).reduce((acc, x) => acc + x, 0);
}




// Per Tiziano
function ex_1_I(x) {
    return sumwhileneg(x);
}

function ex_1_R(x) {
    return sumwhilenegR(x);
}

function ex_1_F(x) {
    return sumuntilnegF(x);
}


/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/
function range(n) {
    a = [];
    for(var i = 0; i < n; ++i) {
        a[i] = i;
    }
    return a;
}

function sumOddRF(n) {
    return range(n).map(x => 2 * x + 1).reduce((acc, x) => acc + x);
}

// Per Tiziano
function ex_2_I(x) {
    return sumOdd(x);
}

function ex_2_R(x) {
    return sumOddR(x);
}
function ex_2_F(x){
	return sumOddRF(x);
}
/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/
function ex_3_F(myArray){
	var avg = 0;
		myArray.every(x => avg += x);
	return avg/myArray.length;
}
/*Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
*/
function ex_4_F(a,b){
    var tot = 0;
    var array4 = [];
    if(a>b){
        for(var i=0; i<=a-b;++i){
			array4.push(b+i);
        }
    }
    else {
        for(var i=0; i<=b-a;++i){
			array4.push(a+i);	
        }
    }
    array4.every(x => tot += x);
    return tot;
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
*/
function ex_5_F(a,b){
	var totale = 0;
	var myarray = []
	for ( var i = 0; i < b; ++i)
		myarray.push(a);
	myarray.every(x => totale += x);
	return totale;
}


/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
*/
function ex_7_F(a,b){
	var myarray = [];
	for(var i = 0; i < b; i++)
		myarray.push(a);
		/*myarray = ex_5_F(myarray, b);*/
	return myarray.reduce((acc,a)=>ex_5_F(acc,a),1);
}

