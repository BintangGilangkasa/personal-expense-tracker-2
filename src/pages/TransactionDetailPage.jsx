import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { formatRupiah } from "../utils/formatRupiah";

import Header from "../components/Header";

import { deleteTransaction } from "../features/transactions/transactions";

function TransactionDetail() {
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Mengambil semua transaksi dari Redux
    const { items } = useSelector(
        (state) => state.transactions
    );

    // Mencari transaksi berdasarkan id dari URL
    const transaction = items.find(
        (item) => String(item.id) === String(id)
    );

    const handleBack = () => {
        navigate("/transactions");
    };

    const handleEdit = () => {

        navigate(`/transactions/${id}/edit`);
    };

    const handleDelete = () => {

        const isConfirm =window.confirm(
            "Apakah anda yakit ingin menghapus transaksi ini?"
        );

        if(confirm) {
            return;
        }

        dispatch(deleteTransaction(transaction.id))

        navigate("/transactions");
    }

    // Jika transaksi dengan ID tersebut tidak ditemukan
    if (!transaction) {
        return (
            <>
                <Header />

                <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-xl">

                        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
                            <h1 className="text-xl font-bold text-gray-900">
                                Transaksi Tidak Ditemukan
                            </h1>

                            <p className="mt-2 text-sm text-gray-500">
                                Data transaksi yang Anda cari tidak tersedia.
                            </p>

                            <button
                                type="button"
                                onClick={handleBack}
                                className="mt-6 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Kembali ke Daftar Transaksi
                            </button>
                        </div>

                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />

            <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl">

                    {/* Tombol kembali */}
                    <button
                        type="button"
                        onClick={handleBack}
                        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
                    >
                        ← Kembali ke Daftar Dashboard
                    </button>

                    {/* Card detail */}
                    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                        {/* Header card */}
                        <div className="border-b border-gray-100 px-6 py-5">
                            <span
                                className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                                    transaction.type === "INCOME"
                                        ? "bg-green-50 text-green-600"
                                        : "bg-red-50 text-red-600"
                                }`}
                            >
                                {transaction.type === "INCOME"
                                    ? "Pemasukan"
                                    : "Pengeluaran"}
                            </span>

                            <h1 className="mt-3 text-2xl font-bold text-gray-900">
                                {transaction.title}
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                Detail informasi transaksi
                            </p>
                        </div>

                        {/* Isi detail */}
                        <div className="space-y-5 p-6">

                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-sm text-gray-500">
                                    Nominal
                                </span>

                                <span
                                    className={`text-lg font-bold ${
                                        transaction.type === "INCOME"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {transaction.type === "INCOME" ? "+" : "-"}{" "}
                                    {formatRupiah(transaction.amount)}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-sm text-gray-500">
                                    Kategori
                                </span>

                                <span className="text-sm font-semibold text-gray-800">
                                    {transaction.category}
                                </span>
                            </div>

                            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-sm text-gray-500">
                                    Tanggal
                                </span>

                                <span className="text-sm font-semibold text-gray-800">
                                    {transaction.date}
                                </span>
                            </div>

                            <div>
                                <span className="text-sm text-gray-500">
                                    Catatan
                                </span>

                                <p className="mt-2 rounded-lg bg-gray-50 p-4 text-sm text-gray-700">
                                    {transaction.note
                                        ? transaction.note
                                        : "Tidak ada catatan"}
                                </p>
                            </div>

                        </div>

                        {/* Tombol aksi */}
                        <div className="flex gap-3 border-t border-gray-100 bg-gray-50 px-6 py-4">

                            <button
                                type="button"
                                onClick={handleBack}
                                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                            >
                                Kembali
                            </button>

                            <button
                                type="button"
                                onClick={handleDelete}
                                className="flex-1 rounded-lg border bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-800"
                            >
                                Hapus Transaksi
                            </button>

                            <button
                                type="button"
                                onClick={handleEdit}
                                className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                            >
                                Edit Transaksi
                            </button>

                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}

export default TransactionDetail;