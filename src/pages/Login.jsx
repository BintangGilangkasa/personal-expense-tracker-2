import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    login,
    clearError
} from "../features/auth/authSlice";

function LoginPage() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Mengambil state autentikasi dari Redux
    const {
        isAuthenticated,
        error
    } = useSelector((state) => state.auth);

    // Jika sudah login, arahkan ke Dashboard
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard", {
                replace: true
            });
        }

        return () => {
            dispatch(clearError());
        };
    }, [isAuthenticated, navigate, dispatch]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch(login(user));
    };

    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">

            <div className="w-full max-w-md">

                {/* Logo / Judul aplikasi */}
                <div className="mb-8 text-center">

                    <h1 className="text-2xl font-bold text-gray-900">
                        Expense Tracker
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                        Personal Finance Management
                    </p>
                </div>

                {/* Card Login */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-900">
                            Login
                        </h2>

                        <p className="mt-1 text-sm text-gray-500">
                            Masuk untuk mulai mengelola transaksi keuangan Anda.
                        </p>
                    </div>

                    {/* Error dari Redux */}
                    {error && (
                        <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        {/* Username */}
                        <div>
                            <label
                                htmlFor="username"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>

                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                autoComplete="username"
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="mb-2 block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                            />
                        </div>

                        {/* Button Login */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Login
                        </button>

                    </form>

                    {/* Informasi akun */}
                    <div className="mt-6 rounded-lg bg-gray-50 px-4 py-3">
                        <p className="text-center text-xs text-gray-500">
                            Gunakan akun yang telah disediakan untuk masuk.
                        </p>
                    </div>

                </div>

                <p className="mt-6 text-center text-xs text-gray-400">
                    Personal Expense Tracker
                </p>

            </div>
        </main>
    );
}

export default LoginPage;