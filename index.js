'use strict';

const prompt = require('prompt-sync')();

console.log("=========================================");
console.log("=== Selamat Datang di Kalkulator CLI  ===");
console.log("=========================================\n");

// --- TAHAP 2: FUNCTION VALIDASI INPUT ---

// Function untuk meminta angka dan memvalidasi jika input bukan angka
function getValidNumber(pesanPrompt) {
  while (true) {
    const input = prompt(pesanPrompt);
    const angka = Number(input);
    
    // Jika input kosong (spasi) atau bukan angka (NaN)
    if (input.trim() === '' || isNaN(angka)) {
      console.log("❌ Input tidak valid! Harap masukkan angka yang benar.");
    } else {
      return angka; // Jika benar, kembalikan nilai angkanya dan keluar dari loop
    }
  }
}

// Function untuk meminta operator dan memastikan input sesuai list yang valid
function getValidOperator() {
  const validOperators = ['+', '-', '*', '/', '%', '**'];
  
  while (true) {
    const operator = prompt("Masukkan operator matematika (+, -, *, /, %, **): ");
    
    // Cek apakah input ada di dalam array validOperators
    if (validOperators.includes(operator)) {
      return operator; // Jika benar, kembalikan nilai operatornya
    } else {
      console.log("❌ Operator tidak valid! Harap masukkan salah satu dari: +, -, *, /, %, **");
    }
  }
}

// --- TAHAP 3: FUNCTION OPERASI MATEMATIKA ---
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

function bagi(a, b) {
  // Edge case: tidak bisa bagi dengan nol
  if (b === 0) {
    return "Error: Tidak bisa dibagi dengan nol!";
  }
  return a / b;
}

function modulo(a, b) {
  // Edge case: tidak bisa modulo dengan nol
  if (b === 0) {
    return "Error: Tidak bisa di-modulo dengan nol!";
  }
  return a % b;
}

function pangkat(a, b) {
  return a ** b;
}

while (true) {
  console.log("--- Mulai Perhitungan ---");
  
  // --- TAHAP 2: MENGGUNAKAN FUNCTION INPUT ---
  const angka1 = getValidNumber("Masukkan angka pertama: ");
  const operator = getValidOperator();
  const angka2 = getValidNumber("Masukkan angka kedua: ");
  
  console.log(`\n[Info] Menghitung: ${angka1} ${operator} ${angka2}`);
  
  // --- TAHAP 3: LOGIKA UTAMA (SWITCH CASE) ---
  let hasil;
  
  switch (operator) {
    case '+':
      hasil = tambah(angka1, angka2);
      break;
    case '-':
      hasil = kurang(angka1, angka2);
      break;
    case '*':
      hasil = kali(angka1, angka2);
      break;
    case '/':
      hasil = bagi(angka1, angka2);
      break;
    case '%':
      hasil = modulo(angka1, angka2);
      break;
    case '**':
      hasil = pangkat(angka1, angka2);
      break;
    default:
      hasil = "Error: Operator tidak dikenali.";
  }
  
  console.log(`[Hasil] = ${hasil}`);
  
  // Mekanisme exit (Tahap 1)
  console.log("\n-----------------------------------------");
  const isLanjut = prompt("Apakah kamu ingin melakukan perhitungan lagi? (yes/no): ").toLowerCase();
  
  if (isLanjut === 'no' || isLanjut === 'exit') {
    console.log("Terima kasih telah menggunakan kalkulator ini. Sampai jumpa!");
    break; // Menghentikan loop utama
  }
  console.log("\n"); // Memberi jarak untuk perhitungan selanjutnya
}
