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
                    Cari dan filter transaksi sesuai kebutuhan.
                </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-6">

                    {/* Search */}
                    <div>
                        <label className="mb-1 block text-xs font-medium text-gray-600">
                            Cari
                        </label>

                        <input
                            type="text"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Judul transaksi"
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                    </div>

                    {/* Tipe */}
                    <div>
                        <label className="mb-1 block text-xs font-medium text-gray-600">
                            Tipe
                        </label>

                        <select
                            value={filterType}
                            onChange={(event) => setFilterType(event.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
                        >
                            <option value="">Semua Tipe</option>
                            <option value="INCOME">Pemasukan</option>
                            <option value="EXPENSE">Pengeluaran</option>
                        </select>
                    </div>

                    {/* Kategori */}
                    <div>
                        <label className="mb-1 block text-xs font-medium text-gray-600">
                            Kategori
                        </label>

                        <select
                            value={filterCategory}
                            onChange={(event) => setFilterCategory(event.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
                        >
                            <option value="">Semua Kategori</option>

                            {categories?.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Tanggal awal */}
                    <div>
                        <label className="mb-1 block text-xs font-medium text-gray-600">
                            Dari
                        </label>

                        <input
                            type="date"
                            value={startDate}
                            onChange={(event) => setStartDate(event.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Tanggal akhir */}
                    <div>
                        <label className="mb-1 block text-xs font-medium text-gray-600">
                            Sampai
                        </label>

                        <input
                            type="date"
                            value={endDate}
                            onChange={(event) => setEndDate(event.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Sort */}
                    <div>
                        <label className="mb-1 block text-xs font-medium text-gray-600">
                            Nominal
                        </label>

                        <select
                            value={sortAmount}
                            onChange={(event) => setSortAmount(event.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500"
                        >
                            <option value="">Tanpa Urutan</option>
                            <option value="asc">Terkecil</option>
                            <option value="desc">Terbesar</option>
                        </select>
                    </div>

                </div>

                <div className="mt-3 flex justify-end">
                    <button
                        type="button"
                        onClick={onClear}
                        className="cursor-pointer text-xs font-medium text-gray-500 transition hover:text-red-600"
                    >
                        Hapus Filter
                    </button>
                </div>
            </div>
            </div>
    );
}

export default TransactionFilter;