import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import TransactionFilter from '../components/TransactionFilter'
import TransactionList from '../components/TransactionList'

const Transactions = () => {
  const { items } = useSelector((state) => state.transactions);

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortAmount, setSortAmount] = useState("");

  const categories = [
    ...new Set(
      items.map((item) => item.category)
        .filter(Boolean)
    )
  ];

  let filteredItems = items.filter((item) => {
    const matchSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchType =
      filterType === "" ||
      item.type === filterType;

    const matchCategory =
      filterCategory === "" ||
      item.category === filterCategory;

    const matchStartDate =
      startDate === "" ||
      item.date >= startDate;

    const matchEndDate =
      endDate === "" ||
      item.date <= endDate;

    return (
      matchSearch &&
      matchType &&
      matchCategory &&
      matchStartDate &&
      matchEndDate
    );
  });

  if (sortAmount === "asc") {
    filteredItems = [...filteredItems].sort(
      (a, b) => Number(a.amount) - Number(b.amount)
    );
  }

  if (sortAmount === "desc") {
    filteredItems = [...filteredItems].sort(
      (a, b) => Number(b.amount) - Number(a.amount)
    );
  }

  const handleClearFilter = () => {
    setSearch("");
    setFilterType("");
    setFilterCategory("");
    setStartDate("");
    setEndDate("");
    setSortAmount("");
  };

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

      <TransactionFilter
        search={search}
        setSearch={setSearch}

        filterType={filterType}
        setFilterType={setFilterType}

        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}

        startDate={startDate}
        setStartDate={setStartDate}

        endDate={endDate}
        setEndDate={setEndDate}

        sortAmount={sortAmount}
        setSortAmount={setSortAmount}

        categories={categories}
        onClear={handleClearFilter}
      />

      <TransactionList
        items={filteredItems}
      />
    </div>
  );
};

export default Transactions;