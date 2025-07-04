const mysym=Symbol("key1")
const JsUser={
    name:"shahbaz",
    [mysym]:"mykey1",
    location:"asnsol",
    Age:21,
    isLogedIn:false,
    lastloginday:["monday","saturday"],
    email:"shahbaz@gmail.com",
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mysym])

//chnage value
JsUser.email="shahbaz@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="shahbaz@microsoft.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello");
}
JsUser.greetingTwo=function(){
    console.log('hello,${this.name}');
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());