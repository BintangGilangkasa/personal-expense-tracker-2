# Personal Expense Tracker

Personal Expense Tracker adalah aplikasi React JS sederhana untuk mencatat pemasukan dan pengeluaran pribadi.

Aplikasi menggunakan React Router untuk navigasi, Redux Toolkit untuk pengelolaan state global, serta `localStorage` agar data transaksi tetap tersimpan setelah halaman di-refresh.

## Cara Menjalankan Aplikasi

Pastikan Node.js dan npm sudah terpasang.

Clone repository:

```bash
git clone <URL_REPOSITORY>
```

Masuk ke folder project:

```bash
cd personal-expense-tracker
```

Install dependency:

```bash
npm install
```

Jalankan aplikasi:

```bash
npm run dev
```

Jalankan unit test:

```bash
npm test
```

## Akun Login

Gunakan akun berikut untuk masuk ke aplikasi:

```text
Username: admin
Password: admin123
```

## Struktur Folder

```text
personal-expense-tracker/
├── public/
│   └── categories.json
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── TransactionFilter.jsx
│   │   ├── TransactionForm.jsx
│   │   └── TransactionList.jsx
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   └── authSlice.js
│   │   └── transactions/
│   │       └── transactions.js
│   │
│   ├── pages/
│   │   ├── AddTransaction.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EditTransaction.jsx
│   │   ├── Login.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── TransactionDetailPage.jsx
│   │   └── Transactions.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   └── categoryService.js
│   │
│   ├── utils/
│   │   └── formatRupiah.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json
```

Penjelasan singkat:

* `app/` digunakan untuk konfigurasi Redux Store.
* `components/` berisi komponen yang dapat digunakan kembali.
* `features/` berisi Redux slice untuk authentication dan transaksi.
* `pages/` berisi halaman aplikasi.
* `routes/` berisi `ProtectedRoute`.
* `services/` digunakan untuk proses pengambilan data, seperti kategori dari file JSON.
* `utils/` berisi helper function seperti format Rupiah.
* `public/categories.json` digunakan sebagai mock data kategori.

## Pembagian Redux State dan Local State

Redux digunakan untuk data yang perlu digunakan oleh beberapa halaman atau komponen.

Contohnya:

```text
Data transaksi
Status authentication
```

Data transaksi digunakan oleh Dashboard, daftar transaksi, detail transaksi, dan halaman edit. Karena digunakan di banyak bagian aplikasi, data tersebut disimpan pada Redux.

Local state menggunakan `useState` untuk data yang hanya digunakan sementara di dalam satu komponen.

Contohnya:

```text
Nilai input form
Search transaksi
Filter tipe
Filter kategori
Rentang tanggal
Sorting
Error validasi
Loading kategori
Status saving
```

Nilai form tidak perlu disimpan di Redux karena hanya dibutuhkan selama pengguna sedang mengisi atau mengubah transaksi.

## Sinkronisasi Redux dengan localStorage

Data transaksi disimpan pada Redux selama aplikasi berjalan.

Agar data tidak hilang ketika halaman di-refresh, data Redux juga disimpan ke `localStorage`.

Saat aplikasi pertama kali dijalankan, transaksi dibaca dari `localStorage`,

Data tersebut kemudian digunakan sebagai initial state Redux:

Setiap Redux Store berubah, transaksi terbaru disimpan kembali ke `localStorage`.
Alurnya:

```text
Tambah / Edit / Hapus transaksi
        ↓
Redux Store berubah
        ↓
store.subscribe()
        ↓
JSON.stringify()
        ↓
localStorage
```

Ketika halaman di-refresh:

```text
localStorage
      ↓
loadTransactions()
      ↓
Redux initialState
      ↓
UI
```
Dengan cara tersebut, Redux digunakan sebagai state utama aplikasi saat berjalan, sedangkan `localStorage` digunakan untuk menjaga data tetap tersedia setelah browser di-refresh.

## Tampilan Website

![Login](/src/assets/image/login.png)
![Dashboard](/src/assets/image/dashboard.png)
![Form](/src/assets/image/form.png)
![Daftar_Transaksi](/src/assets/image/daftar_transaksi.png)
![Detail_Transaksi](/src/assets/image/detail.png)

