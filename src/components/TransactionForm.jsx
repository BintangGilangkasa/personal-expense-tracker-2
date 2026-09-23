import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addTransaction } from "../features/transactions/transactions";
import { fetchCategories } from "../services/categoryService";

function TransactionForm({
    editingTransaction,
    onUpdateTransaction
}) {
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

    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [categoryError, setCategoryError] = useState("")
    const [errors, setErrors] = useState({})
    const [isSaving, setIsSaving] = useState(false)

    useEffect(() => {
        if (editingTransaction) {
            setForm({
                title: editingTransaction.title || "",
                type: editingTransaction.type || "",
                amount: editingTransaction.amount || "",
                category: editingTransaction.category || "",
                date: editingTransaction.date || "",
                note: editingTransaction.note || ""
            });
        }
    }, [editingTransaction]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                setLoadingCategories(true);
                setCategoryError("");

                const data = await fetchCategories();

                setCategories(data);
            } catch (error) {
                setCategoryError(error.message);
            } finally {
                setLoadingCategories(false);
            }
        };

        loadCategories();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });

        setErrors({
            ...errors,
            [name]: ""
        })
    };

    const validateForm = () => {
        const newErrors = {};

        if (!form.title.trim()) {
            newErrors.title = "Judul wajib diisi";
        }

        if (!form.type) {
            newErrors.type = "Tipe Transaksi wajib diisi";
        }

        if (!form.amount || Number(form.amount) <= 0) {
            newErrors.amount = "Nominal harus lebih besar dari 0";
        }

        if (!form.category) {
            newErrors.category = "Kategori transaksi wajib diisi";
        }

        if (!form.date) {
            newErrors.date = "Tanggal wajib diisi";
        }

        if (form.note.length > 200) {
            newErrors.note = "Catatan maksimal 200 karakter";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        setIsSaving(true)

        if (editingTransaction) {
            const updatedTransaction = {
                id: editingTransaction.id,
                title: form.title,
                amount: Number(form.amount),
                type: form.type,
                category: form.category,
                date: form.date,
                note: form.note
            };

            onUpdateTransaction(updatedTransaction);

            alert("Transaksi berhasil diperbarui");

            setIsSaving(false);

            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            title: form.title,
            amount: Number(form.amount),
            type: form.type,
            category: form.category,
            date: form.date,
            note: form.note
        };

        dispatch(addTransaction(newTransaction))

        alert("Transaksi berhasil ditambahkan")

        setForm({
            title: "",
            type: "",
            amount: "",
            category: "",
            date: "",
            note: ""
        });

        setIsSaving(false)

        navigate("/transactions")
    };

    return (
        <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
    >

        {/* Judul */}
        <div className="sm:col-span-2">
            <label>Judul</label>

            <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
            />

            {errors.title && (
                <p className="mt-1 text-xs text-red-500">
                    {errors.title}
                </p>
            )}
        </div>

        {/* Tipe */}
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

            {errors.type && (
                <p className="mt-1 text-xs text-red-500">
                    {errors.type}
                </p>
            )}
        </div>

        {/* Nominal */}
        <div>
            <label>Nominal</label>

            <input
                type="number"
                min="0"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                className="no-spinner"
            />

            {errors.amount && (
                <p className="mt-1 text-xs text-red-500">
                    {errors.amount}
                </p>
            )}
        </div>

        {/* Kategori */}
        <div>
            <label>Kategori</label>

            <select
                name="category"
                value={form.category}
                onChange={handleChange}
                disabled={loadingCategories}
            >
                <option value="">
                    {loadingCategories
                        ? "Memuat kategori..."
                        : "Pilih kategori"
                    }
                </option>

                {categories.map((category) => (
                    <option
                        key={category.id}
                        value={category.name}
                    >
                        {category.name}
                    </option>
                ))}
            </select>

            {errors.category && (
                <p className="mt-1 text-xs text-red-500">
                    {errors.category}
                </p>
            )}

            {categoryError && (
                <p className="mt-1 text-xs text-red-500">
                    {categoryError}
                </p>
            )}
        </div>

        {/* Tanggal */}
        <div>
            <label>Tanggal</label>

            <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
            />

            {errors.date && (
                <p className="mt-1 text-xs text-red-500">
                    {errors.date}
                </p>
            )}
        </div>

        {/* Catatan */}
        <div className="sm:col-span-2">
            <label>Catatan</label>

            <input
                type="text"
                name="note"
                value={form.note}
                onChange={handleChange}
                maxLength={200}
            />

            <div className="mt-1 flex justify-between">
                {errors.note ? (
                    <p className="text-xs text-red-500">
                        {errors.note}
                    </p>
                ) : (
                    <span />
                )}

                <span className="text-xs text-gray-400">
                    {form.note.length}/200
                </span>
            </div>
        </div>

        {/* Button */}
        <button
            type="submit"
            disabled={isSaving}
            className="sm:col-span-2"
        >
            {isSaving
                ? "Menyimpan..."
                : editingTransaction
                    ? "Simpan Perubahan"
                    : "Simpan Transaksi"
            }
        </button>

    </form> 
    );
}

export default TransactionForm;