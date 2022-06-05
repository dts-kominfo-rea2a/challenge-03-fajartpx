// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const listBelanjaan = null;
function listBelanjaan (param1) {
  let hasil = [];
  for(let counter=0;counter<param1.length;counter++){
    hasil.push("- "+param1[counter].nama+" x "+param1[counter].kuantitas);
  }
  return hasil;
}

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
// const totalBelanjaan = null;
function totalBelanjaan (param1){
  let harga=0;
  for(let counter=0;counter<param1.length;param1++){
    harga = (param1[counter].harga*2+param1[counter+1].harga+param1[counter+2].harga*8);
  }
  return harga;
}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
