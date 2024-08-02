function myasyncFn(){
    let p = new Promise(resolve=>{
        // setTimeout(function(){
        //     resolve("knkjsgd")
        // },2000)
        resolve("hii there////////////")
    })
    return p;
}
const value = myasyncFn();
console.log(value+"fddddd")
value.then(function () {
    console.log("hii there");
    console.log(value);
})