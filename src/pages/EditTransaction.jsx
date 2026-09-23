import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import TransactionForm from "../components/TransactionForm";

import { updateTransaction } from "../features/transactions/transactions";

function EditTransaction() {
    const { id } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { items } = useSelector(
        (state) => state.transactions
    );

    const transaction = items.find(
        (item) => String(item.id) === String(id)
    );

    const handleUpdateTransaction = (updatedTransaction) => {
        dispatch(updateTransaction(updatedTransaction));

        alert("Transaksi berhasil diperbarui")

        navigate("/transactions");
    };

    const handleCancel = () => {
        navigate("/dashboard");
    };

    if (!transaction) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
                <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">

                    <h1 className="text-xl font-bold text-gray-900">
                        Transaksi Tidak Ditemukan
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Data transaksi yang ingin diedit tidak tersedia.
                    </p>

                    <button
                        type="button"
                        onClick={handleCancel}
                        className="mt-6 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Kembali
                    </button>

                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">

            <div className="mx-auto max-w-xl">

                {/* Tombol kembali */}
                <button
                    type="button"
                    onClick={handleCancel}
                    className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-blue-600"
                >
                    ← Kembali ke Dashboard
                </button>

                {/* Card Edit */}
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                    {/* Heading */}
                    <div className="border-b border-gray-100 px-6 py-5">
                        <span className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                            Transaksi
                        </span>

                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Transaksi
                        </h1>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Ubah data transaksi yang sudah tersimpan.
                        </p>
                    </div>

                    {/* Form */}
                    <div
                        className="
                            p-6

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
                        <TransactionForm
                            editingTransaction={transaction}
                            onUpdateTransaction={handleUpdateTransaction}
                        />
                    </div>

                </div>

                <p className="mt-4 text-center text-xs text-gray-400">
                    Pastikan perubahan data sudah benar sebelum disimpan.
                </p>

            </div>

        </main>
    );
}

export default EditTransaction;