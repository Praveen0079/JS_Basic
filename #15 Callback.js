function sq(n) {
    return n*n;
}
function cube(n) {
    return n*n*n;
}
function sum(a,b,fn){
    return fn(a)+fn(b);
}
console.log(sum(2,1,sq));
console.log(sum(2,2,cube));
