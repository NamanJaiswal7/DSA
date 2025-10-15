// input 5
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

const n = 5;

let i = 1; //Row counter

while(i <= n){
    let j = 1; //Column counter
    let pattern = "";

    while(j <= n){
        pattern += "* ";
        j++;
    }
    console.log(pattern);
    i++;
}