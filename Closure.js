// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// creation phase pada Global context

// console.log(nama);
// var nama = 'Robby';

// nama var = undefined
// nama function = fn()
// konsep di atas di sebut hoisting
// window = global scope
// this. = window









// execution phase // kurung buka tutup () = untuk mengeksekusi

// var nama = 'Robby';
// var umur = 28;

// console.log(sayHello());

// function sayHello() {
//     return `Hallo, nama saya ${nama}, saya ${umur} tahun.`;
// }
// function membuat local execution context
// yang didalamnya terdapat creation dan execution phase
// bisa mengakses window // dan bisa mengakses arguments // hoisting lokal









// var nama = 'Robby';
// var username = '@gifaryroby';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;

// }
// console.log(cetakURL(username));









// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c();
//     }
//     b();
// }
// a();







// function satu() {
//     var nama = 'Roby';
//     console.log(nama);
// }
// function dua() {
//     console.log(nama);
// }
// console.log(nama);
// var nama = 'erik';
// satu();
// dua('dody');
// console.log(nama);








// Lexical scope

// function init() {
//     // let nama = 'Roby'; // local variable
//     return function(nama) { // inner function (closure)
//         console.log(nama); // akses ke parent variable
//     }
// }
// let panggilNama = init();
// panggilNama('Robby');
// panggilNama('Fakih');







// contoh closure

//  function ucapkanSalam(waktu) {
//      return function (nama) {
//          console.log(`Hallo ${nama}, selamat ${waktu} semoga harimu menyenangkan`);
//      }
//  }
//  let selamatPagi = ucapkanSalam('Pagi');
//  let selamatSiang = ucapkanSalam('Siang');
//  let selamatMalam = ucapkanSalam('Malam');

//  selamatPagi('Robby');







let add = (function() {
    let counter = 0;
    return function() {
       return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());