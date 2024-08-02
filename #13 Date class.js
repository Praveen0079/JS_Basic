function  sum(n) {
    let a = 0;
    for (let i = 0;i<n;i++){
        a=a+i;
    }
    return a;
}
const beforeDate = new Date();
const beforeTime = beforeDate.getTime();
console.log(sum(10000000));
const afterDate = new Date();
const afterTime = afterDate.getTime();
console.log(afterTime-beforeTime);