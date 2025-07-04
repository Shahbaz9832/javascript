class User{
    constructor(email, password){
    this.email=email
    this.password=password
    }
    get email(){
    return this._email.toUpperCase()
    }
    set email(value){
    this._email=value
    }
   
    }
     const tea=new User("shah@a","qwert");
    console.log(tea.email);