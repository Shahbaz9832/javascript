
// var c=400
// if(true){
//     let a=20
//     const b=30
//     var c=40
// }
// // console.log(a);
// // console.log(b);
// console.log(c);

function one(){
    const username="shahbaz"
    function two(){
        const website="youtube"
        console.log(username);
    }
    two()
} 
one()

// SCOPE LEVEL AND MINI HOISTING

if(true){
    const username="shahbaz"
    if(username==="shahbaz"){
        const website=" youtube"
        // console.log(username+website);
    }
}




// +++++intersting++++++

console.log(addone(5)); 
function addone(num){
    return num+1
}


// another way of creation of function

// console.log(addtwo(5));
const addtwo =function(num){
    return num+2
}
// addtwo(5)

 const a=25
    if(a%2===0){
        console.log(a," is even number")
    }
    else{
        console.log(a,"is a odd number");
    }
    
    
