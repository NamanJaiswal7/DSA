// Prime Number
let num = 17;

let isPrime = true;

for(let i = 2; i*i <= num ; i++) {
    if(num % i === 0) {
       isPrime = false;
       break;
    }
}

if(isPrime) {
    console.log("Prime number");
}else{
    console.log("Not a prime number");
}

// Function Declaration
function name(a){
    console.log(a);
}

// Prime Number upto n
const n = 50;

for(let i = 2; i <=n; i++){
  
    let isPrime = true;

    for(let j = 2; j*j <= i ; j++) {
        if(i % j === 0) {
           isPrime = false;
           break;
        }
    }
    
    if(isPrime) {
        console.log(i);
    }
}

// Fibonacci Series
// 0,1,1,2,3,5....
//n = 5, O/P - 0,1,1,2,3

let tillN = 5;

let a = 0;
let b = 1;

for(let i = 0; i < tillN; i++){
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

// Digit of number
// 12345, O/P - 5

let num1 = 12345234095723495087234895670923476590234;
let count = 0;

while(num1 !== 0){
    num1 = Math.floor(num1/10);
    count++;
}

console.log(count);
