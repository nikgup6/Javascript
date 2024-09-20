var name= "Nikunj";
var age = 19;
var fav_col= "unknown";
console.log(name, age, fav_col);

var length= 20;
var width= 10;
console.log(length * width);


var num1=20;
var num2=21;
console.log(num1>num2);
console.log(num1!=num2);

let n=1;
if (n>0){
    console.log("Number is positive");
}
else if (n==0){
    console.log("Number is zero");
}else{
    console.log("Number is negative");
}

let j="admin";
switch (j){
    case "admin":
        console.log("He is an admin");
        break
    case "editor":
        console.log("He is an editor");
        break
    case "viewer":
        console.log("He is a viewer");
        break
    default:
        console.log("He has no job");
}

for(let i=1; i<11;i++){
    if (i%3==0){
        console.log(i)
    }
    else{
        continue
    }
}

var n=10;
var q=5;
var p=12;
function aver(n,p,q){
    return ((n+p+q)/3);
}
console.log(aver(n,p,q))
const store= (n,p,q) => {
    return ((n+p+q)/3);
}
console.log(store(n,q,p));

let n=2;
let p=1000;

function summ(a,b){
    return a+b;
}
console.log(summ(n,p))

var som= (a,b) =>{
    return a+b


}
console.log(som(n,p))

let n=0;

function odd(n){
    return n % 2 == 0
}

console.log(odd(n))