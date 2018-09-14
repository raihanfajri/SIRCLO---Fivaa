var fivaa = function(n){
    let retStr = '';
    for(let row = n; row > 0; row--){
        retStr += String(row-1).repeat(2);
        retStr += String(row+1).repeat(row);
        retStr += '\n';
    }
    return retStr;
}
console.log(fivaa(5));
