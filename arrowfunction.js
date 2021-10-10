// function expression

// const tampilNama = function (nama) {
//     return `Hallo, ${nama}`;
// }
// console.log(tampilNama('Robby'));






// Arrow Function // arrow function tiidak memiliki konsep this

// const tampilNama = (nama) => { return `Hallo, ${nama}`;}
// console.log('Robby Tamara Gifary');


// const tampilNama = (nama, waktu) => { 
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Robby', 'Pagi'));



// cth: tanpa parameter

// const tampilNama = () => `Hello World !`;
// console.log(tampilNama());






// cth: Arrow Function map

// let mahasiswa = ['Robby', 'Syakir', 'Rasya', 'Raffa'];
// let jmlHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jmlHuruf);


// let mahasiswa = ['Robby', 'Syakir', 'Rasya', 'Raffa'];
// let jmlHuruf = mahasiswa.map(nama => nama.length);
// console.log(jmlHuruf);


// let mahasiswa = ['Robby', 'Syakir', 'Rasya', 'Raffa'];
// let jmlHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length}));
// console.table(jmlHuruf);









// Konsep this pada Arrow Function
// Constructor function

// const mahasiswa = function() {
//     this.nama = 'Robby';
//     this.umur = 28;
//     this.sayHello = function() {
//         console.log(`Hallo, Nama Saya ${this.nama}, dan Saya ${this.umur} Tahun.`);
//     }
// }
// const Robby = new mahasiswa();






// Mengubah Constructor function ke arrow function

// const Mahasiswa = function () {
//     this.nama = 'Robby';
//     this.umur = 28;
//     this.sayHello = () => {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     }
// }
// const Robby = new Mahasiswa();


// // cth: ke-2

// const Mahasiswa = function () {
//     this.nama = 'Robby';
//     this.umur = 28;
//     this.sayHello = function () {
//         console.log(`Hallo, nama saya ${nama}, dan saya ${this.umur} Tahun.`);
//     }
//     setInterval(() => {
//         console.log(this.umur++);
//     },500);
// }
// const Robby = new Mahasiswa();
















// Object literal

// const mhs1 = {
//     nama: 'Robby',
//     umur: 28,
//     sayHello: function () {
//         console.log(`Hallo, nama saya ${this.nama}, dan saya ${this.umur} Tahun.`); // this akan mencari ke lrxical scopenya
//     }
// }




const box = document.querySelector('.box');
box.addEventListener('click', function() {
    this.classList.toggle('size');

    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
});