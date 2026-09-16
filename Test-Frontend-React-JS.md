# Tes Pembuatan Aplikasi Frontend React JS

## Personal Expense Tracker

### Tujuan

Membuat aplikasi sederhana untuk mencatat pemasukan dan pengeluaran pribadi. Tes ini digunakan untuk mengukur pemahaman kandidat terhadap React JS, React Router, Redux Toolkit, local storage, pengelolaan form, asynchronous process, dan unit testing.

> **Estimasi pengerjaan:** 4–6 jam  
> **Ketentuan:** Dikerjakan secara mandiri tanpa bantuan AI.

---

## 1. Fitur Wajib

### 1.1 Login

Tidak diperlukan backend. Gunakan akun statis berikut:

```text
Username: admin
Password: admin123
```

Ketentuan:

- Status login disimpan di `localStorage`.
- Pengguna yang belum login tidak dapat mengakses halaman aplikasi.
- Pengguna tetap login setelah halaman di-refresh.
- Jika belum login, pengguna diarahkan ke halaman `/login`.
- Tersedia tombol logout.

### 1.2 Dashboard

Dashboard menampilkan:

- Total pemasukan.
- Total pengeluaran.
- Saldo saat ini.
- Jumlah seluruh transaksi.
- Lima transaksi terbaru.

Rumus saldo:

```text
Saldo = Total Pemasukan - Total Pengeluaran
```

### 1.3 Manajemen Transaksi

Pengguna dapat:

- Menambahkan transaksi.
- Melihat daftar transaksi.
- Melihat detail transaksi.
- Mengubah transaksi.
- Menghapus transaksi dengan konfirmasi.

Setiap transaksi memiliki data berikut:

| Field | Keterangan |
|---|---|
| ID | ID unik transaksi |
| Tipe | `INCOME` atau `EXPENSE` |
| Judul | Nama transaksi |
| Nominal | Nilai transaksi |
| Kategori | Kategori transaksi |
| Tanggal | Tanggal transaksi |
| Catatan | Opsional |

### 1.4 Pencarian dan Filter

Sediakan fitur:

- Pencarian berdasarkan judul transaksi.
- Filter berdasarkan tipe transaksi.
- Filter berdasarkan kategori.
- Filter berdasarkan rentang tanggal.
- Urutkan nominal dari terbesar atau terkecil.
- Tombol untuk menghapus seluruh filter.

---

## 2. Persyaratan Teknis

Wajib menggunakan:

- React JS.
- React Router.
- Redux Toolkit.
- `localStorage`.
- Functional component.
- React Hooks.
- Form validation.

Pembagian state yang diharapkan:

| Data | Penyimpanan |
|---|---|
| Data transaksi | Redux dan `localStorage` |
| Status login | Redux dan `localStorage` |
| Filter aktif | Redux atau component state |
| Nilai sementara pada form | Component state |

Data transaksi pada Redux dan `localStorage` harus tetap sinkron.

---

## 3. Routing

Minimal tersedia route berikut:

```text
/login
/dashboard
/transactions
/transactions/add
/transactions/:id
/transactions/:id/edit
```

Ketentuan routing:

- Halaman internal dilindungi menggunakan protected route.
- Pengguna yang belum login diarahkan ke `/login`.
- Route yang tidak ditemukan menampilkan halaman `404 Not Found`.

---

## 4. Validasi Form

Form transaksi harus menerapkan validasi berikut:

- Judul wajib diisi.
- Nominal wajib berupa angka dan lebih besar dari `0`.
- Tipe transaksi wajib dipilih.
- Kategori wajib dipilih.
- Tanggal wajib diisi.
- Catatan maksimal 200 karakter.
- Pesan error ditampilkan di dekat field terkait.
- Data tidak boleh disimpan jika validasi gagal.

---

## 5. Simulasi Proses Asynchronous

Buat fungsi untuk mengambil kategori dari file JSON lokal atau mock API.

Contoh data kategori:

```json
[
  { "id": 1, "name": "Gaji", "type": "INCOME" },
  { "id": 2, "name": "Bonus", "type": "INCOME" },
  { "id": 3, "name": "Makanan", "type": "EXPENSE" },
  { "id": 4, "name": "Transportasi", "type": "EXPENSE" }
]
```

Aplikasi harus menangani dan menampilkan:

- Kondisi loading.
- Kondisi data berhasil dimuat.
- Kondisi error jika pengambilan data gagal.

Peserta diperbolehkan menggunakan `createAsyncThunk`.

---

## 6. UI dan UX

Desain tidak perlu kompleks, tetapi harus memenuhi ketentuan berikut:

- Nyaman digunakan pada desktop dan perangkat mobile.
- Navigasi mudah dipahami.
- Nominal ditampilkan menggunakan format Rupiah.
- Menampilkan empty state jika belum ada transaksi.
- Menampilkan feedback setelah data berhasil ditambah, diubah, atau dihapus.
- Tombol simpan dinonaktifkan selama proses penyimpanan.

Peserta bebas menggunakan CSS biasa, CSS Module, Tailwind CSS, Bootstrap, atau library UI lainnya.

---

## 7. Unit Test

Buat minimal tiga pengujian:

1. Pengujian perhitungan total saldo.
2. Pengujian validasi form transaksi.
3. Pengujian Redux reducer untuk menambah atau menghapus transaksi.

Gunakan Vitest atau Jest dan React Testing Library.

---

## 8. Struktur Folder

Contoh struktur minimal yang diharapkan:

```text
src/
├── app/
│   └── store.js
├── components/
├── features/
│   ├── auth/
│   └── transactions/
├── pages/
├── routes/
├── services/
├── utils/
└── App.jsx
```

Struktur boleh berbeda selama tetap rapi, konsisten, dan mudah dijelaskan.

---

## 9. Hasil yang Dikumpulkan

Peserta wajib mengumpulkan:

- Source code dalam repository Git.
- File `README.md`.
- Screenshot aplikasi.
- Riwayat commit yang wajar.
- Aplikasi yang dapat dijalankan dengan perintah berikut:

```bash
npm install
npm run dev
npm test
```

README minimal menjelaskan:

- Cara menjalankan aplikasi.
- Akun yang digunakan untuk login.
- Struktur folder aplikasi.
- Alasan pembagian Redux state dan local state.
- Cara sinkronisasi Redux dengan `localStorage`.
- Fitur yang belum selesai, jika ada.

---

## 10. Kriteria Penilaian

| Aspek | Bobot |
|---|---:|
| Fungsionalitas dan kesesuaian requirement | 25% |
| Pemahaman React dan Hooks | 20% |
| Redux Toolkit dan pengelolaan state | 20% |
| Struktur dan kualitas kode | 15% |
| Routing, form, dan validasi | 10% |
| Unit testing | 5% |
| UI/UX dan responsivitas | 5% |
| **Total** | **100%** |

### Indikator Penilaian Teknis

Perhatikan apakah peserta:

- Tidak melakukan mutasi state secara langsung.
- Menggunakan `useEffect` dengan dependency yang benar.
- Tidak menyimpan seluruh state ke Redux tanpa alasan.
- Membuat komponen yang dapat digunakan kembali.
- Menangani data `localStorage` yang kosong atau rusak.
- Tidak menduplikasi logika perhitungan di banyak tempat.
- Menggunakan key list yang stabil.
- Membersihkan import, variabel, dan kode yang tidak digunakan.
- Memberikan penamaan variabel dan fungsi yang mudah dipahami.

---

## 11. Sesi Verifikasi

Setelah pengumpulan, lakukan sesi penjelasan dan perubahan kode selama 20–30 menit. Minta peserta untuk:

1. Menjelaskan alur data dari form sampai Redux dan `localStorage`.
2. Menambahkan filter nominal minimum secara langsung.
3. Mengubah perhitungan saldo agar menggunakan Redux selector.
4. Menjelaskan kapan menggunakan Redux dan kapan menggunakan `useState`.
5. Menjelaskan apa yang terjadi jika isi `localStorage` tidak valid.
6. Memperbaiki satu bug kecil yang diberikan penguji.

Sesi ini digunakan untuk memastikan peserta memahami kode yang dibuat, bukan hanya menghasilkan aplikasi yang berjalan.

---

## 12. Catatan untuk Peserta

- Fokus pada kualitas dan keterbacaan kode, bukan desain yang kompleks.
- Tidak diperbolehkan menggunakan AI untuk menghasilkan atau memperbaiki kode.
- Dokumentasi resmi React dan library yang digunakan boleh dibaca.
- Library tambahan boleh digunakan selama penggunaannya dapat dijelaskan.
- Jika ada requirement yang belum selesai, tuliskan secara jujur di dalam `README.md`.
