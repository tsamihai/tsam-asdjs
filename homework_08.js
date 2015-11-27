var merge = function (snx, dsx) {
    var result = [],
    a = 0,
    b = 0;
while(a < snx.length && b < dsx.length) {
    if(snx[a] < dsx[b]) {
        result.push(snx[a++]);
    } else{
        result.push(dsx[b++]);
    }
}
while (a < snx.length){
    result.push(snx[a++]);
}
while (b < dsx.length){
    result.push(dsx[b++]);
}
return result;
}



var mergeSortRec = function (array){
    
};





function ex_8 (x) {
    return mergeSortRec (x);
}