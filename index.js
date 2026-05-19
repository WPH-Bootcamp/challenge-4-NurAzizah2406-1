'use strict';

const prompt = require('prompt-sync')();

console.log("=========================================");
console.log("=== Selamat Datang di Kalkulator CLI  ===");
console.log("=========================================\n");

while (true) {
  console.log("--- Mulai Perhitungan ---");
  
  // TODO: Di tahap selanjutnya, logika input angka, operator, dan perhitungan ditaruh di sini
  console.log("(Logika input dan kalkulator akan ditambahkan di tahap selanjutnya...)");
  
  // Mekanisme exit (Tahap 1)
  console.log("\n-----------------------------------------");
  const isLanjut = prompt("Apakah kamu ingin melakukan perhitungan lagi? (yes/no): ").toLowerCase();
  
  if (isLanjut === 'no' || isLanjut === 'exit') {
    console.log("Terima kasih telah menggunakan kalkulator ini. Sampai jumpa!");
    break; // Menghentikan loop utama
  }
  console.log("\n"); // Memberi jarak untuk perhitungan selanjutnya
}
