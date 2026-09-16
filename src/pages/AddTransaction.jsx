import { Link } from "react-router-dom";
import TransactionForm from "../components/TransactionForm";

function TransactionAdd() {

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-xl">

                {/* Tombol kembali */}
                <Link
                    to="/dashboard"
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
                >
                    ← Kembali ke Dashboard
                </Link>

                {/* Card */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {/* Header halaman */}
                    <div className="border-b border-gray-100 px-4 py-4 sm:px-8">
                        <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                            Transaksi
                        </span>

                        <h1 className="text-2xl font-bold text-gray-900">
                            Tambah Transaksi
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Tambahkan data pemasukan atau pengeluaran baru
                            untuk membantu memantau kondisi keuangan Anda.
                        </p>
                    </div>

                    {/* Form */}
                    <div
                        className="
                            p-6 sm:p-6

                            [&_form]:space-y-5

                            [&_label]:mb-2
                            [&_label]:block
                            [&_label]:text-sm
                            [&_label]:font-medium
                            [&_label]:text-gray-700

                            [&_input]:w-full
                            [&_input]:rounded-lg
                            [&_input]:border
                            [&_input]:border-gray-300
                            [&_input]:bg-white
                            [&_input]:px-3
                            [&_input]:py-2.5
                            [&_input]:text-sm
                            [&_input]:text-gray-900
                            [&_input]:outline-none
                            [&_input]:transition
                            [&_input:focus]:border-blue-500
                            [&_input:focus]:ring-2
                            [&_input:focus]:ring-blue-100

                            [&_select]:w-full
                            [&_select]:rounded-lg
                            [&_select]:border
                            [&_select]:border-gray-300
                            [&_select]:bg-white
                            [&_select]:px-3
                            [&_select]:py-2.5
                            [&_select]:text-sm
                            [&_select]:text-gray-900
                            [&_select]:outline-none
                            [&_select:focus]:border-blue-500
                            [&_select:focus]:ring-2
                            [&_select:focus]:ring-blue-100

                            [&_form>button]:w-full
                            [&_form>button]:rounded-lg
                            [&_form>button]:bg-blue-600
                            [&_form>button]:px-4
                            [&_form>button]:py-3
                            [&_form>button]:text-sm
                            [&_form>button]:font-semibold
                            [&_form>button]:text-white
                            [&_form>button]:transition
                            [&_form>button:hover]:bg-blue-700
                        "
                    >
                        <TransactionForm />
                    </div>

                </div>

                {/* Informasi kecil */}
                <p className="mt-4 text-center text-xs text-gray-400">
                    Pastikan data transaksi sudah benar sebelum disimpan.
                </p>

            </div>

        </main>
    );
}

export default TransactionAdd;