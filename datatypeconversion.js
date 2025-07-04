let score='33abc'
let age= true
console.log(typeof score)
console.log(typeof (score))
console.log(typeof age);

let valueInnumber= Number(score)


console.log(typeof valueInnumber); //it will help to converte string value in number as we see//
console.log( valueInnumber)//NaN = Not a Number.

console.log(age);
console.log(typeof age);

// conversion rule 
// "33" => 33, 
// '3abc' => NaN (not a number)
// true => 1 ,false=> 0
// 1=> true , 0=>false
// "" => false.
// "shahbaz"=> true.


// let somenumber=33
// let stringnumber=String(somenumber);
// console.log(stringnumber);

// console.log(typeof stringnumber);

console.log(null>0);
console.log(null==0);
console.log(null<0);
console.log(undefined=0);


// strict check
// ===