// const x = 10;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);



// //HTML Fragments

// const mhs = {
//     nama: 'Robby Tamara Gifary',
//     umur: 28,
//     nrp: '12345',
//     email: 'gifaryroby@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`; 





// 2.looping

// const mhs = [
//     {
//         nama: 'Robby',
//         email: 'gifaryroby@gmail.com'
//     },
//     {
//         nama: 'Raffa',
//         email: 'raffa@gmail.com'
//     },
//     {
//         nama: 'Syakir',
//         email: 'syakir@gmail.com'
//     }
// ];
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
//     </div>`;


// conditionals // ternary
const lagu = {
    judul: 'Tetap dalam jiwa',
    penyanyi: 'Isana sarasvati',
    feat: 'Rayi Putra'
}
const el = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
    </ul>
    </div>`;










document.body.innerHTML = el;