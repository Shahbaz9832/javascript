function setUsername(username){
    this.username=username;
    console.log("called");
    
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email;
    this.password=password;
}
const detail=new createUser("Shahbaz","Sha123@","5514854");
console.log(detail);

