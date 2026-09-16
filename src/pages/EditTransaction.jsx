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

        navigate("/transactions");
    };

    const handleCancel = () => {
        navigate("/transactions");
    };

    if (!transaction) {
        return (
            <main>
                <h1>Transaksi tidak ditemukan</h1>

                <button
                    type="button"
                    onClick={handleCancel}
                >
                    Kembali
                </button>
            </main>
        );
    }

    return (
        <main className="edit-transaction-page">
            <div className="edit-transaction-container">

                <div className="edit-transaction-heading">
                    <span>
                        Transaksi
                    </span>

                    <h1>Edit Transaksi</h1>

                    <p>
                        Ubah data transaksi yang sudah tersimpan.
                    </p>
                </div>

                <TransactionForm
                    editingTransaction={transaction}
                    onUpdateTransaction={handleUpdateTransaction}
                />

                <button
                    type="button"
                    onClick={handleCancel}
                >
                    Kembali
                </button>

            </div>
        </main>
    );
}

export default EditTransaction;