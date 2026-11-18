# A Little Universe for Naura

## Isi folder
- `index.html` : struktur dan isi website
- `style.css` : warna, layout, dan animasi
- `script.js` : tombol, musik, surat, dan efek hati

## Cara membuka di komputer
1. Ekstrak ZIP.
2. Buka folder `naura-birthday-website`.
3. Klik dua kali `index.html` (Chrome/Edge).
4. Untuk musik, letakkan file audio milikmu bernama `music.mp3` di folder yang sama.

## Cara mengganti foto
Di `index.html`, cari bagian `<!-- GALLERY -->`? Galeri berada pada section dengan id `memories`.
Setiap blok seperti:
`<div class="photo-placeholder">♡<small>add your photo</small></div>`
Ganti dengan:
`<img src="foto1.jpg" alt="Kenangan kami">`
Lalu di `style.css`, tambahkan:
`.photo-card img { width:100%; aspect-ratio:4/5; object-fit:cover; display:block; }`
Taruh `foto1.jpg` di folder yang sama. Ulangi untuk foto lain.

## Cara mengedit cerita dan surat
Buka `index.html` dengan VS Code atau Notepad.
- Ubah teks pada bagian `Our little story` sesuai tanggal/kenangan kalian.
- Ubah paragraf pada bagian `A letter for you` agar benar-benar memakai kata-katamu.
- Ubah judul, caption foto, dan pesan wish sesuai keinginan.
- Di kartu hadiah, tautan Roblox hanya menuju halaman redeem. Jangan menaruh kode gift card di website publik.

## Cara menambahkan musik
Gunakan audio yang kamu punya hak untuk menggunakannya (misalnya musik buatan sendiri atau audio bebas lisensi).
Simpan sebagai `music.mp3` di folder yang sama dengan `index.html`.
Musik baru mulai setelah tombol Open your surprise ditekan. Tombol Play/Pause ada di kanan atas.

## Publikasikan gratis dengan GitHub Pages
1. Buat akun di https://github.com (jika belum punya).
2. Klik tombol `+` lalu `New repository`.
3. Isi nama repository, misalnya `naura-birthday`, pilih `Public`, lalu klik `Create repository`.
4. Klik `Add file` > `Upload files`.
5. Upload `index.html`, `style.css`, `script.js`, foto, dan `music.mp3` (jika ada). Pastikan `index.html` berada di root repository, bukan di dalam folder lain.
6. Klik `Commit changes`.
7. Buka `Settings` > `Pages`.
8. Pada bagian `Build and deployment`, pilih `Deploy from a branch`.
9. Pilih branch `main`, folder `/ (root)`, lalu klik `Save`.
10. Tunggu beberapa menit. Alamat website biasanya `https://USERNAME.github.io/naura-birthday/`.

## Sebelum membagikan
- Buka link di HP menggunakan mode incognito atau browser lain.
- Cek semua foto dan musik.
- Jangan unggah alamat rumah, nomor telepon, chat pribadi, atau kode gift card.
- Karena repository publik, file dan source code dapat dilihat siapa pun yang memiliki akses ke repository.
