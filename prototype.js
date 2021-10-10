// // cara untuk membuat Object
// // 1.Object Literal
// // problem nama variable/mahasiswa tidak boleh sama/tidak efektif untuk object yg banyak



// deklarasi variable
// let mahasiswa = {
    // lalu deklarasi properti
//     nama: 'Robby',
//     energi: 10,
    // lalu deklarasikan Method
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan`);
//     }
// }


// 2.function Declaration
// setiap instansiasi tidak di buat ulang didalam memory
// mengelola 2 object yg dibuat dgn function declaration samaa object literal
// ketika ada method baru harus didaftarkan & sebaliknya supaya tetap nyambung 
// cara efektif dengan Object.create
// const mMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     },
//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, Selamat bermain`);
//     },
//     tidur: function (jam) {
//         this.energi += jam;
//         console.log(`Hallo ${this.nama}, Selamat Tidur`);
//     }
// };
// function mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(mMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }
// let syakir = mahasiswa('Syakir', 10);
// let roby = mahasiswa('Roby', 20);

// // 3.Constructor function
// // keyword new
// function mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`Hallo ${this.nama}, Selamat bermain`);
//     }
// }
// let roby = new mahasiswa('Roby', 10);
// let Rasya = new mahasiswa('Rasya',20);


// membuat object prototype

function mahasiswa(nama, energi) {
    this.nama = nama;
    this.energi = energi;
}
mahasiswa.prototype.makan = function(porsi) {
    this.energi += porsi;
    return `Hallo ${this.nama},Selamat makan`;
}
mahasiswa.prototype.main = function(jam) {
    this.energi -= jam;
    return `Hallo ${this.nama}, selamat Bermain`;
}
mahasiswa.prototype.tidur = function(jam) {
    this.energi += jam * 2;
    return `Hallo ${this.nama}, selamat tidur`;
}


let roby = new mahasiswa('roby', 10);