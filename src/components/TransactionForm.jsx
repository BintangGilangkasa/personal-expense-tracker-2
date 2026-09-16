import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addTransaction } from "../features/transactions/transactions";

function TransactionForm() {
    const [form, setForm] = useState({
        title: "",
        type: "",
        amount: "",
        category: "",
        date: "",
        note: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            title: form.title,
            amount: Number(form.amount),
            type: form.type,
            category: form.category,
            date: form.date,
            note: form.note
        };

        // Untuk sementara hanya jalankan jika prop-nya tersedia
        dispatch(addTransaction(newTransaction))       

        setForm({
            title: "",
            type: "",
            amount: "",
            category: "",
            date: "",
            note: ""
        });

        navigate("/transactions")
    };

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>Judul</label>

                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Tipe Transaksi</label>

                <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                >
                    <option value="">
                        Pilih Tipe
                    </option>

                    <option value="INCOME">
                        Pemasukan
                    </option>

                    <option value="EXPENSE">
                        Pengeluaran
                    </option>
                </select>
            </div>

            <div>
                <label>Nominal</label>

                <input
                    type="number"
                    min="0"
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Kategori</label>

                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                >
                    <option value="">
                        Pilih Kategori
                    </option>

                    <optgroup label="Pengeluaran">
                        <option value="barang">
                            Barang
                        </option>

                        <option value="konsumsi">
                            Makanan & Minuman
                        </option>

                        <option value="transportasi">
                            Transportasi
                        </option>

                        <option value="tagihan">
                            Tagihan & Utilitas
                        </option>
                    </optgroup>

                    <optgroup label="Pemasukan">
                        <option value="gaji">
                            Gaji Bulanan
                        </option>

                        <option value="investasi">
                            Investasi & RDPU
                        </option>

                        <option value="usaha">
                            Keuntungan Usaha
                        </option>
                    </optgroup>
                </select>
            </div>

            <div>
                <label>Tanggal</label>

                <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Catatan</label>

                <input
                    type="text"
                    name="note"
                    value={form.note}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">
                Simpan
            </button>

        </form>
    );
}

export default TransactionForm;