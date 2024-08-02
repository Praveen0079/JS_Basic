function myNewFn() {
    let p = new Promise(function (resolve){
        setTimeout(function (){
            resolve("hiii its promise")
        },3000)
        
    })
    return p;
}
async function main(){
    console.log("main");
    let value = await myNewFn();
    console.log("hii its main");
    console.log(value);
}

main();
