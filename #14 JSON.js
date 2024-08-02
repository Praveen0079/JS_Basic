const user = '{"name": "Praveen","age":20,"state":"HP"}'
const user1 = JSON.parse(user);
console.log(user1["state"]);
console.log(user1["name"]);
console.log(user1["age"]);

