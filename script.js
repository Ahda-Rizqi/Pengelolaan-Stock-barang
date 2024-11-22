// ============================================
// Studi Kasus: Pengelolaan Stok Barang di Toko
// ============================================

// 1. Buat sebuah objek untuk menyimpan stok barang.
// Misalnya, stok barang berupa objek seperti:
let toko = {
  Laptop: 10,
  Headphone: 10,
  Mouse: 10,
};

// 2. Buat fungsi untuk menambah stok barang.
// Fungsi ini akan menerima dua parameter: nama barang dan jumlah yang ingin ditambah.
function tambahStok(namabarang, jumlahbarang) {
  if (!namabarang || !jumlahbarang) {
    console.log("Nama barang dan jumlah barang wajib ditambahkan");
    return;
  }

  if (toko.hasOwnProperty(namabarang)) {
    let konfirmasi = confirm("Apakah anda ingin menambah stock barang?");
    if (konfirmasi) {
      toko[namabarang] += jumlahbarang;
      console.log("Stock berhasil ditambahkan!");
      return `Stock ${namabarang} = ${toko[namabarang]}`;
    } else {
      console.log("Anda gagal menambah stock barang");
    }
  } else {
    console.log("Nama barang tidak ditemukan!");
  }
}
// Contoh fungsi: tambahStok("Laptop", 5) => menambah stok Laptop menjadi 15.

//fungsi menambambah barang
function tambahbarang(namabarang, jumlahbarang) {
  if (!namabarang || !jumlahbarang) {
    console.log("Nama barang dan jumlah barang wajib diisi");
    return;
  }

  if (toko.hasOwnProperty(namabarang)) {
    console.log(`Barang ${namabarang} sudah ada, apakah anda ingin menambah stock`);
    let konfirmasi = confirm("Apakah anda ingin menambah stock");
    if (konfirmasi) {
      toko[namabarang] = jumlahbarang;
      console.log("barang berhasil ditambahkan");
      return `Stock ${namabarang} adalah ${toko[namabarang]}`;
    } else {
      console.log("Anda membatalkan aksi!");
    }
  } else {
    let konfirmasi = confirm("Apakah anda ingin menambah barang");
    if (konfirmasi) {
      toko[namabarang] = jumlahbarang;
      console.log("barang berhasil ditambahkan");
      return `Stock ${namabarang} adalah ${toko[namabarang]}`;
    }else{
      console.log("Anda membatalkan aksi")
    }
  }
}

// 4. Buat fungsi untuk mengurangi stok barang.
// Fungsi ini juga menerima dua parameter: nama barang dan jumlah yang ingin dikurangi.
function kurangiStok(namabarang, jumlahbarang) {
  if (!namabarang || !jumlahbarang) {
    console.log("Nama barang dan jumlah barang wajib ditambahkan");
    return;
  }

  if (toko.hasOwnProperty(namabarang)) {
    // Cek apakah stok cukup
    let stokCukup = toko[namabarang] >= jumlahbarang;
    // Tampilkan konfirmasi tergantung pada kondisi stok
    if (stokCukup) {
      // Proses jika pengguna mengonfirmasi pengurangan stok
      let konfirmasi = confirm("Apakah anda ingin mengurangi stock barang?");
      if (konfirmasi) {
        toko[namabarang] -= jumlahbarang;
        console.log("Stock berhasil dikurangi");
        console.log(`Stock ${namabarang} = ${toko[namabarang]}`);
        return toko[namabarang];
      } else {
        console.log("Anda gagal mengurangi stock barang");
      }
    } else {
      console.log("Stock barang tidak bisa dikurangi!");
    }
  } else {
    console.log("Nama barang tidak ditemukan!");
  }
}
// Pastikan stok tidak bisa kurang dari 0! ⚠️
// Contoh fungsi: kurangiStok("Mouse", 10) => stok Mouse menjadi 10.

// 5. Buat fungsi untuk mengecek stok barang.
// Fungsi ini akan menerima nama barang dan mengembalikan jumlah stok yang tersedia.
function cekStok(namabarang) {
  if (!namabarang) {
    console.log("Nama barang wajib diisi!");
    return;
  }

  if (toko.hasOwnProperty(namabarang)) {
    console.log(`Stok ${namabarang} adalah = ${toko[namabarang]}`);
  } else {
    console.log(`barang ${namabarang} tidak ditemukan!`);
  }
}
// Contoh fungsi: cekStok("Headphone") => akan menampilkan 15.

// Pastikan ketika mengurangi stok, tidak ada yang kurang dari 0.
// Misalnya, jika stok barang kurang dari jumlah yang ingin dikurangi, beri pesan peringatan.

// Cobalah untuk menyelesaikan setiap bagian, dan buat objek toko yang memiliki beberapa barang.
// Setelah itu, implementasikan fungsi-fungsi yang diminta!

// Semangat! Jangan lupa untuk mengetes setiap fungsi yang kamu buat. 😎
// ============================================
