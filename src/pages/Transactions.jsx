import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { formatRupiah } from '../utils/formatRupiah';
import TransactionFilter from '../components/TransactionFilter'

const Transactions = () => {
  const { items } = useSelector((state) => state.transactions);

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg-px-8">
      <h1 className="text-2xl font-bold text-gray-800 text-center">Daftar Transaksi</h1>
      <div className=" flex justify-between items-center">
        <Link
          to="/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
        >
           ← Kembali ke Dashboard
        </Link>
        
        {/* Tombol ini akan mengarahkan ke /transactions/add dan memicu modal muncul */}
        <Link
          to="/transactions/add"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2.5 rounded-lg font-medium transition shadow-sm text-center"
        >
          + Tambah Transaksi
        </Link>
      </div>

      {/* Tabel Transaksi */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 mx-auto max-w-7xl space-y-6 px-4 py-8 sm:px-6 lg-px-8">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b text-xs text-gray-500 uppercase">
              <th className="py-2">Tanggal</th>
              <th className="py-2">Judul</th>
              <th className="py-2">Tipe</th>
              <th className="py-2 text-right">Nominal</th>
            </tr>
          </thead>
          <tbody className="divide-y text-sm">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-3">{item.date}</td>
                <td className="py-3 font-medium">{item.title}</td>
                <td className="py-3">{item.type}</td>
                <td className="py-3 text-right">{formatRupiah(item.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Outlet: Tempat Modal AddTransactionModal dirender melayang di atas tabel */}
      <Outlet />
    </div>
  );
};

export default Transactions;