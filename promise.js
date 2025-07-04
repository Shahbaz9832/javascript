const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Shahbaz",password:"1234"})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
    
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("promise is either rejected or resolve");    
})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"1234"})
        }else{
            reject('ERROR:js went wrong')
        }
    },1000)
})
async function consumePromiseFive() {
    try {
        const response=await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}
consumePromiseFive();

// A fetch() promise  only rejects when a netwrok error is encountered(which is usally when there is a permission issue)  

fetch()