function TransactionFilter({
    search,
    setSearch,
    filterType,
    setFilterType,
    filterCategory,
    setFilterCategory,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    sortAmount,
    setSortAmount,
    categories,
    onClear
}) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

            <div className="mb-5">
                <h2 className="text-lg font-bold text-gray-800">
                    Filter Transaksi
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Cari dan filter transaksi berdasarkan kebutuhan Anda.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                {/* Search Judul */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Cari Judul
                    </label>

                    <input
                        type="text"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Contoh: Gaji"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Filter Tipe */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Tipe
                    </label>

                    <select
                        value={filterType}
                        onChange={(event) => setFilterType(event.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">Semua Tipe</option>
                        <option value="INCOME">Pemasukan</option>
                        <option value="EXPENSE">Pengeluaran</option>
                    </select>
                </div>

                {/* Filter Kategori */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Kategori
                    </label>

                    <select
                        value={filterCategory}
                        onChange={(event) =>
                            setFilterCategory(event.target.value)
                        }
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">Semua Kategori</option>

                        {categories.map((category) => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Tanggal Awal */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Dari Tanggal
                    </label>

                    <input
                        type="date"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Tanggal Akhir */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Sampai Tanggal
                    </label>

                    <input
                        type="date"
                        value={endDate}
                        onChange={(event) => setEndDate(event.target.value)}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                {/* Sort Nominal */}
                <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                        Urutkan Nominal
                    </label>

                    <select
                        value={sortAmount}
                        onChange={(event) => setSortAmount(event.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="">Tanpa Urutan</option>
                        <option value="asc">
                            Nominal Terkecil
                        </option>
                        <option value="desc">
                            Nominal Terbesar
                        </option>
                    </select>
                </div>

            </div>

            <div className="mt-5 flex justify-end">
                <button
                    type="button"
                    onClick={onClear}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                    Hapus Semua Filter
                </button>
            </div>

        </div>
    );
}

export default TransactionFilter;