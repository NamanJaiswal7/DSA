// // input n = 5
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

let n = 5;
let row = 1;
let nst = n;
let nsp = n-nst;

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
        nsp++;
        nst--;
        row++;
}
