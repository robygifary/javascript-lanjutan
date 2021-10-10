// filter mencari angka >= 3

// // cth: 1 // filter
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = [];
// for ( let i = 0; i < angka.length; i++ ) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);




// // cth: 2 // filter
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);





// // cth: map // mengkalikan seluruh array
// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);
// console.log(angka);




// cth: reduce // jumlahkan seluruh element pada array

// const angka = [-1, 8, 9, 1, 4, -5, , -4, 3, 2, 9];
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);



// Method chaining // cari angka > 5 // kalikan 3 // jumlahkan
const angka = [-1, 8, 9, 1, 4, -5, , -4, 3, 2, 9];
const hasil = angka.filter(a => a > 5) //8, 9, 9
.map(a => a * 3) // 24, 27, 27
.reduce((acc, cur) => acc + cur); // hasil = 78
console.log(hasil);






























// function kerjakanTugas(matkul, selesai) {
//     console.log(`Mulai mengerjakan tugas ${matkul} ...`);
//     selesai();
// }
// function selesai() {
//     alert('Selamat mengerjakan tugas!');
// }
// kerjakanTugas('Pemogramman', selesai);
