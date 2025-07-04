class User{
    constructor(username,email,passwrod){
        this.username=username;
        this.email=email;
        this.passwrod=passwrod;
    }
    encryptpassword(){
        return `${this.passwrod}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`;

    }
}

// const userD=new User("shahbaz","sha@123","4521")
//     console.log(userD.encryptpassword());
//     console.log(userD.changeUsername());

    /* Another method*/
function user(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
}

 user.prototype.encryptpassword=function(){
    return `${this.password}abc`
}
user.prototype.changeUsername=function(){
    return`${this.username.toUpperCase()}`;

}
const tea= new user("tea","tea123@","1235")
console.log(tea.encryptpassword());
console.log(tea.changeUsername());

