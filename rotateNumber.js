// input 123567

// Rotate by right 4

// 671235

let number = 123567;
let rotate = 4;

let tempNum = number;

let count = 0;

while(tempNum!==0){
    tempNum = Math.floor(tempNum/10);
    count++;
}

rotate = rotate % count;

let mul = 1;
let div = 1; 

div = Math.pow(10,count-rotate);
mul = Math.pow(10,rotate);

const que = Math.floor(number/div);
const rem = number % div;

const rotatedNumber = rem * mul + que;

console.log(rotatedNumber);