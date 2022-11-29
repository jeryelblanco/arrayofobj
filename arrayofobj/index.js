// Creating an array of objects containing two object human[0] and human[1]
const human = [
    {
    first : "Harry",
    last : "Potter",
    age : 17
    },
    {
        first : "John",
        last: "Doe",
        age: 24
    }
]
// Arrays are classified as Objects, essentially everything is an object in JavaScript
// const obj = {};
// const arry = [];
// console.log(typeof(arry))
// console.log(typeof(obj))
// Previously we wrote this function using "return human[arg].first"
// but instead we just return the whole object then call ".first" on the function
printObject = (arg) =>{
    return human[arg]
}
// function printObject(){
//     return human[0].first
// }
// Here call ".first" on the function printObject with the index as the parameter
console.log(printObject(1).first);
console.log(printObject(0))
console.log("My object is", human)
console.log(human[0].first)
console.log(human)
// This is how you would loop through the array and 
// use sting concatenation to label your objects in the console
human.forEach((humans, i) =>{
    console.log("This is object number",i,":", humans)
})