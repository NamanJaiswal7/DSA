// *   *
//  * *
//   * 
//  * *
// *   *
// n = 5


let n = 5;
let row = 1;
let nsp1 = 0;
let nst = 1;
let nsp2 = n - 2;

while (row <= n) {
    let col = 1;
    let pattern = "";

    while (col <= nsp1) {
        pattern += " ";
        col++;
    }

    col = 1;
    while (col <= nst) {
        pattern += "*";
        col++;
    }

    col = 1;
    if (row !== Math.floor(n / 2) + 1) {
        while (col <= nsp2) {
            pattern += " ";
            col++;
        }

        col = 1;
        while (col <= nst) {
            pattern += "*";
            col++;
        }
    }

    console.log(pattern);

    if (row <= Math.floor(n / 2)) {
        nsp1++;
        nsp2 -= 2;
    } else {
        nsp1--;
        nsp2 += 2;
    }

    row++;
}
