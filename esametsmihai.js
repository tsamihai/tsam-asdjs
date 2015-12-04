//verifica che la somma di initialArray sia 11340.
function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

function sum(myarray) {
    val = 0;
    for(i = 0; i < myarray.length; ++i) {
            vali = myarray[i];
            val = val + vali;
    }    
    return val;
}
//verifica confermata.


//esercizio 1 della ricorsione.

function ex_1_esame(array,n) { 
    contatore = 0;
    if(array.length == 0) {
        return contatore;
    } else { 
        if(array[0] == n) {
            contatore++;
        }
    return contatore + ex_1_esame(array.slice(1),n);    
    }
}

//b=initialArray();
//ex_1_esame(b,5070);
//risultato: 2;


//esercizio 2 che deve usare filter, map,reduce.

function ex_2_esame(array) {
    var numeri = array.filter(function(x) {
        return x % 2 == 0 && x > 0;});
    var numeripositivi = numeri.map(function(x) {
        return x * x;});
    var somma = numeripositivi.reduce(function(acc, x) {
        return acc + x;}, 0);
    return Math.sqrt(somma);
}
//b=initialArray();
//ex_2_esame(b);
//risultato: 344161.650263361



//ex_4 albero binario
function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }
}

function maxelemento(node) {
    var massimo = node.item;
    if(node.left != null) {
        massimo = Math.max(massimo, maxelemento(node.left));
    }
    if(node.right != null) {
        massimo = Math.max(massimo, maxelemento(node.right));
    }
    return massimo;
}

function ex_4_esame(){
    var b = initialArray();

    var alberobin = new BST();
    
    for(var i = 0; i < b.length;i++) {
        alberobin.add(b[i]);
    }
    return maxelemento(alberobin.root);
}
