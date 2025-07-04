// 

let myHero=["thor","spiderman"]
let Heropower={
thor:"thunder",
spiderman:"skling",
getdetail:function(){
    console.log(`Thor power is:${this.thor}`);
 }
}
Object.prototype.shahbaz=function(){
    console.log(`all object`);
// 
}
Array.prototype.heyShahbaz=function(){
    console.log(`hey shahbaz`);
    
}
// Heropower.shahbaz();
// // Heropower.heyShahbaz();
// myHero.heyShahbaz();

// Inheritance/

const User={
    name:"shahbaz",
    email:"sha123@"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:`js assignment`,
    fullTime:true,
    __proto__: TeachingSupport
}
Teacher.__proto__=User
Object.setPrototypeOf(TeachingSupport,Teacher)
let anotherUsername="Adresse       "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength();