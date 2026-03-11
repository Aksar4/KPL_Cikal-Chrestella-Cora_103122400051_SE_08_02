/**
 * Tulislah sebuah fungsi yang menerima bilangan N dan
 *  mencetak penjumlahan dari 1 hingga N. contohnya, jika N
 *  adalah 5, maka outputnya adalah 15 (karena 1+2+3+4+5 = 15)
 */

function jumlahSampaiN(N) {
    let total = 0;
    
    for (let i = 1; i <= N; i++) {
        total += i;
    }
    
    console.log(total);
}

jumlahSampaiN(5); 