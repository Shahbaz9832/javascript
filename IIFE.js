// Immediately Invoked Function Expression (IIFE)

// This is named IIFE function
( function chai(){
    console.log("DB CONNECTED ");
})();

// SIMPLE IIFE

( (name)=>{
    console.log("DB CONNECTED TWO",`${name}`);
})('shahbaz');