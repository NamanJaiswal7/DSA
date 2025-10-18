// input n = 5

//        *
//      * *
//    * * *
//  * * * *
//* * * * *

let n = 5;
let nst = 1;
let row = 1; 
let nsp = n-row;

while(row <= n){

        let col = 1;
        let pattern = "";

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
        nst++;
        nsp--;
        row++;
}