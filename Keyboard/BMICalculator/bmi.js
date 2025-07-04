const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
 const height=parseInt(document.querySelector('#height').value);
 const weight=parseInt(document.querySelector('#weight').value);
 const results=document.querySelector('#results');
 if(height===''||height<0||isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`;
 }
 else if(weight===''||weight<0||isNaN(weight)){
    results.innerHTML=`please give a valid height ${weight}`;
 }
  else {
    const bmi=(weight/ ((height * height)/10000)).toFixed(2);
    // to show the result
    results.innerHTML=`<span>${bmi}</span>`;
 }

 for(const i=18.6;i<=24.6;i++){
   if(bmi==i){
      // const r1=
      results.innerHTML=`<span>${r1}</span>`;
      // console.log("Normal Range");
   }
   else if(bmi<18.6){
      results.innerHTML=`<span>${"under weight less than 18.6"}</span>`;
      // console.log("under weight less than 18.6");
   }
   else {
      results.innerHTML=`<span>${"over weight."}</span>`;
      // console.log("over weight.");
      
   }
 }
});

