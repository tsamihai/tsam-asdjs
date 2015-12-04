/*Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.*/
function sumNeg(myarray) {
    val =0;
    for(i = 0; i < myarray.length; ++i) {
        if (myarray[i] >=  0){
            vali = myarray[i];
            val = val + vali;
    }
        else{
            return val;
        }
    }    
    return val;
}

function sumNegR(myarray){
    if (myarray.length ==0 || myarray[0] <0 ) {
        return 0;
     } else{
            return myarray[0] + sumNegR(myarray.slice(1));
 }
}
// Per Tiziano
function ex_1_I(x) {
    return sumNeg(x);
}

function ex_1_R(x) {
    return sumNegR(x);
}

/*Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari*/

function buildOddArray(n) {
    a = [];
    for(i = 0; i < n; i++) {
        a[i] = (2 * i) + 1;
    }
    return sumNeg(a);
}

function buildOddArrayR(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + buildOddArrayR(n-1);
    }
}



// Per Tiziano
function ex_2_I(x) {
    return buildOddArray(x);
}

function ex_2_R(x) {
    return buildOddArrayR(x);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function avg(myArray){
    sum = sumNeg(myArray);
    average = sum/myArray.length;
    return average;
}

function avgAllRW(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllRW(myarray.slice(1));
    }
}

function avgAllR(myarray) {
    return avgAllRW(myarray) / myarray.length;
}

// Per Tiziano
function ex_3_I(x) {
    return avg(x);
}

function ex_3_R(x) {
    return avgAllR(x);
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. 
Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/
function sumInterval(a,b){
        s = 0;
        if (a < b){
            for(i = a; i <= b; i++) {
                   s = s+i;                                      
            } 
            return s;
        } 
        else  if(a > b){
           {
                for(i = b; i<= a; i++) {
                 s = s+i; 
             } 
                return s;
            }
        }    
}   


function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }


}

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
}


// Per Tiziano
function ex_4_I(a, b) {
    return sumInterval(a, b);
}

function ex_4_R(x, y) {
    return sumIntervalR(a, b);
}



/*Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.*/


function mult(a,b){
         s = 0;
         for (i = 0; i < b; i++){
              s = s + a;
         }       
         return s;       
}                   
function multR(a,b){
    if(a==0 || b==0){
        return 0;

    }else {
        return a + multR(a,b-1);
    }
}


// Per Tiziano
function ex_5_I(a,b) {
    return mult(a,b);
}

function ex_5_R(a,b) {
    return multR(a,b);
}



/*Esercizio 6
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite
l’utilizzo dei soli operatori somma e sottrazione.
Esempio:
div(5, 3) => 1 resto 2*/

function divIte(a, b){
	q = 0;
    r = 0;
	v = [];
    if(a === 0 || b === 0){
		return "error";
    } else{
   for(i = a; i >= b; i -= b){
		q++;
		r = i - b;
					
    }
	v = [q,r];
    return (v);
    }
} 


function divRic(a, b, q){
    
    if(b === 0){
        
        return('error');
    }else{
        if(a >= b){
            r = a - b;
            q++;
            return divRic(a - b, b, q);
        } else {
			v = [q,r];
            return (v);
        }
    }

}
// Per Tiziano
function ex_6_I(a,b) {
    return divIte(a,b);
}

function ex_6_R(x) {
    return divRic(a,b);
}





/*Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
Esempio:
pow(2, 3) => 8*/

function powa(a,b){                  
      var s = 1;  
      for( var i = 0; i < b; i++){
            
          s= mult(s,a);
          
      }               
      return s;        
                   
}      
function powaR(a,b){
    if(b==0){
        return 1;
     } else {
        return mult(a,powaR(a,b-1));
     } 
}
// Per Tiziano
function ex_7_I(x) {
    return powa(a,b);
}

function ex_7_R(x) {
    return powaR(a,b);
}

/*Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.*/

function matrix(myarray){
       var n = Math.sqrt(myarray.length); 
       var resarray=[];
       var row =[];      
       for (var i = 0; i < myarray.length;i++){
            row[row.length=myarray[i]];
            if (row.length==n){
                resarray.push(row);
                row= [];
            }
        }                                  
       return resarray;
}   
function magic(myarray,matrix){
    matrix.unshift(myarray);
    
}
function matrixR(myarray,n){
    if (myarray.length==n){
        var a = [myarray];
     } else{
         var spli
        return magic(myarray.slice(0,n),matrixR(myarray.slice(n)),n);

     }

}

// Per Tiziano
function ex_8_I(x) {
    return matrix(x);
}

function ex_8_R(x) {
    return matrixR(x);
}
/*Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.*/

function ordina(myarray){
   var x=[];
   var y = myarray.length-1;
   for( var i = 0; i < myarray.length; i++) {
            x[y] = myarray[i];
            y = y - 1;
   }                            
     return a = x;
}
function scambia(a, i, j){
	var tmp = a[i];
	a[i] = a[j];
	a[j] = tmp;
}


function ordinaR(myarray, i){
	var z = myarray.length - 1 - i;
	if(i <= z ){
		
		scambia(myarray, i, z);
		return inverti_r(myarray, i+1);
		}
		return myarray;
	
}
// Per Tiziano
function ex_9_I(x) {
    return ordina(x);
}

function ex_9_R(x) {
    return ordinaR(x);
}
/*Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un lista di n elementi
contenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}*/

function lista(num1, num2){
    vett = [];
    for(i = 0; i < num2; i++){
        vett.push(num1);
    }
    return vett;
}


//ricorsiva
function listaR(vett, num1, num2){
    if(num2 != 0){
        vett.push(num1);
        return replicateRicorsiva(vett, num1, num2 - 1);
    } else {
        
        return vett;
    }
}

// Per Tiziano
function ex_10_I(a,b) {
    return lista(a,b);
}

function ex_10_R(x) {
    return listaR(a,b);
}
/*11 Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}*/

function padi(myarray){
    a= [];  pari=0;
    b=[];  dispari=0;
   for (i=0; i<myarray.length;i++){
        if(myarray[i]% 2 == 0){
             a[pari]=myarray[i]                  
               pari++;
         }
        else
            {
              b[dispari]=myarray[i];
              dispari++; 
            }
    }
   return b.concat(a);
}                   

// Per Tiziano
function ex_11_I(x) {
    return padi(x);
}

function ex_11_R(x) {
    return padiR(x);
}