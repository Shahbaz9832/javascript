let a=14;
let b=4;
let c=a+b;
console.log("C=",c);

let d=15;
if(d%2==0)
{
    console.log("it is even number",d);
}
else{
    console.log("it is a odd number",d);
}


let age=52;
let result=age>18?"adult":"not adult";
console.log("result=",result);
let number=prompt("Enter any number:");
let n=number%5==0?"The Number is multiple of 5":"The Number is not multiple of 5";
console.log(n);


let marks=prompt("Enter student's marks:");
if(marks>=80 && marks<=100){
    console.log("student grade according to thier marks= 'A' ");
}else if(marks>=70 && marks<=79){
    console.log("student grade according to thier marks= 'B' ");
}else if(makrs>=60 && marks<=69){
    console.log("student grade according to thier marks= 'C' ");
}else if(marks>=50 && marks<=59){
    console.log("student grade according to thier marks= 'D' ");
}
else{
    console.log("student is Fail which is not possible");
}