const month=3
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("Default case:");
        break;
}


// __ Ternary operator ___
const iceTeaPrice=100
iceTeaPrice <=80? console.log("lessthan80"): console.log("greater than 80");



const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}
let val1;
val1=null??10??20
console.log(val1);
