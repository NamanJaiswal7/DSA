// 0
// 1 1
// 2 3 5
// 8 13 21 34
// N = 4

let n = 4;
let row = 1;
let nst = 1;
let first = 0;
let second = 1;

while(row <= n){
    let col = 1;
    let pattern = "";

    while(col <= nst){
        pattern += first+" ";
        let next = first + second;
        first = second;
        second = next;
        col++;
    }
    console.log(pattern);
    row++;
    nst++;
}