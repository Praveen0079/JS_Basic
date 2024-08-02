class Animal{
    constructor(name,legs,speaks){
        this.name=name;
        this.legs=legs;
        this.speaks=speaks;
    }
    speak(){
        console.log(this.speaks);
    }
}
let dog = new Animal("doggi",4,"barks");  //create object
let lion = new Animal("Simbha",4,"Roar");
console.log("Name is "+dog.name+" have "+dog.legs+" legs "+dog.name+" "+dog.speaks);
lion.speak(); // calling the function on object