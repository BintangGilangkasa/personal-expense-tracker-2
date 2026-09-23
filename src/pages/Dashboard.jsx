import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatRupiah } from "../utils/formatRupiah"

import Header from "../components/Header"


function Dashboard({ onLogout }) {
  // Mengambil daftar transaksi dari redux store
  const { items } = useSelector((state) => state.transactions);

  // 1. Menghitung total pemasukan
  const totalIncome = items
    .filter((item ) => item.type === "INCOME")
    .reduce((sum, item) => sum + Number(item.amount), 0)

  // 2. Menghitung total pengeluaran
  const totalExpense = items
    .filter((item) => item.type === "EXPENSE")
    .reduce((sum, item) => sum + Number(item.amount), 0)

  // 3. Rumus Saldo: Total Pemasukan - Total Pengeluaran
  const currentBalance = totalIncome - totalExpense;

  // 4. Jumlah Seluruh Transaksi
  const totalTransactions = items.length;

  // 5. Mengambil 5 Transaksi terbaru
  const recentTransactions = [...items]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5)

    return (
      <>
    <Header onLogout={onLogout}/>

    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg-px-8">
      {/* Judul & Tombol Aksi Cepat */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Ringkasan</h1>
          <p className="text-gray-500 text-sm">Pantau kondisi keuangan pribadi Anda secara real-time.</p>
        </div>
        <Link
          to="/transactions/add"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition shadow-sm text-center"
        >
          + Tambah Transaksi
        </Link>
      </div>

      {/* Grid Kartu Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Saldo Saat Ini</p>
          <h3 className={`text-2xl font-bold mt-1 ${currentBalance >= 0 ? 'text-gray-900' : 'text-red-600'}`}>
            {formatRupiah(currentBalance)}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Total Pemasukan</p>
          <h3 className="text-2xl font-bold text-green-600 mt-1">
            {formatRupiah(totalIncome)}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Total Pengeluaran</p>
          <h3 className="text-2xl font-bold text-red-600 mt-1">
            {formatRupiah(totalExpense)}
          </h3>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Jumlah Transaksi</p>
          <h3 className="text-2xl font-bold text-blue-600 mt-1">
            {totalTransactions}
          </h3>
        </div>
      </div>

      {/* Tabel 5 Transaksi Terbaru */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">5 Transaksi Terbaru</h2>
          <Link
            to="/transactions"
            className="text-sm text-blue-600 hover:underline font-medium"
          >
            Lihat Semua ({totalTransactions}) →
          </Link>
        </div>

        {recentTransactions.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-200">
            <p className="text-gray-500 text-sm">Belum ada transaksi yang tercatat.</p>
            <Link
              to="/transactions/add"
              className="text-blue-600 text-sm font-semibold hover:underline mt-1 inline-block"
            >
              Mulai tambah transaksi pertama Anda
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                  <th className="pb-3 px-2">ID</th>
                  <th className="pb-3 px-2">Tanggal</th>
                  <th className="pb-3 px-2">Judul</th>
                  <th className="pb-3 px-2">Kategori</th>
                  <th className="pb-3 px-2">Tipe</th>
                  <th className="pb-3 px-2 text-right">Nominal</th>
                  <th className="pb-3 px-2 text-center"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {recentTransactions.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition">
                    <td className="py-3 px-2 text-gray-600">{item.id}</td>
                    <td className="py-3 px-2 text-gray-600">{item.date}</td>
                    <td className="py-3 px-2 font-medium text-gray-900">{item.title}</td>
                    <td className="py-3 px-2">
                      <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          item.type === 'INCOME'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {item.type === 'INCOME' ? 'Pemasukan' : 'Pengeluaran'}
                      </span>
                    </td>
                    <td
                      className={`py-3 px-2 text-right font-semibold ${
                        item.type === 'INCOME' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {item.type === 'INCOME' ? '+' : '-'} {formatRupiah(item.amount)}
                    </td>
                    <td className="py-3 px-2 text-center">
                      <Link
                        to={`/transactions/${item.id}`}
                        className="text-xs text-blue-600 hover:text-blue-800 font-semibold"
                      >
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
    </>
    );
  };

export default Dashboard
