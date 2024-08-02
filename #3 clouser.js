function outside(x) {
    function inside(y) {
        console.log(x+y);
    }
    return inside;
}
const run = outside(10)(5);
console.log(run);