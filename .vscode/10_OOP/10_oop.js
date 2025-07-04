/* What is object:
 -collection of properties and method 
 -toLOWERCASE
 parts of oop:
 object literals
 -constructor fuction
 -Prototypes
 -class
 -Instance(new,this)
 #pillar:
 -Abstraction
 -Encapsulation
 -Inheritence
 -polymorphism */
const user={
    username:"Shahbaz Ansari",
    userID:56785,
    signedIn:true,
    getUserdetail:function(){
        // console.log("Got user detail from database");
        // console.log(`username:${this.username}`);
        console.log(this);
        
        
    }
}
console.log(user);
// console.log(user.getUserdetail());
console.log(this); //It will give empty object. Expected output: {}


function USer(){username,logiccount,isLoggedin}
const user2={
    username:"Shahbaz Ansari",
    userID:56785,
    signedIn:true,
    getUserdetail:function(){
        // console.log("Got user detail from database");
        // console.log(`username:${this.username}`);
        console.log(this);
        
        
    }
}



// PROTOTYPE //

function multipleBy5(num){
    return num*5
}
multipleBy5.power=2
console.log();
