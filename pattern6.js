// *** ***
// **   **
// *     *
// **   **
// *** ***
// N = 5


let n = 5;
let row = 1;
let nsp = 1;
let nst = Math.floor(n/2) + 1;

while(row <= n){
    
    let col = 1;
    let pattern = "";
    while(col <= nst){
        pattern += "*";
        col++;
    }

    col = 1;
    while(col <= nsp){
        pattern += " ";
        col++;
    }

    col = 1;
    while(col <= nst){
        pattern += "*";
        col++;
    }
    
    console.log(pattern);

    if(row <= Math.floor(n/2)){
        nsp += 2;
        nst--;
    }else{
        nsp -= 2;
        nst++;
    }
    row++;
}