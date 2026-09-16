import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

    const handleLogout = () => {
        const isConfirm = window.confirm(
            "Apakah Anda yakin ingin keluar dari akun ini?"
        );

        if (!isConfirm) {
            return;
        }

        dispatch(logout());
        navigate("/login");
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                {/* Brand */}
                <div>
                    <h1 className="text-xl font-bold tracking-tight text-gray-900">
                        Expense Tracker
                    </h1>

                    <p className="mt-0.5 text-xs text-gray-500">
                        Personal Finance Management
                    </p>
                </div>

                {/* User & Logout */}
                <div className="flex items-center gap-4">

                    {user && (
                        <div className="hidden text-right sm:block">
                            <p className="text-xs text-gray-400">
                                Login sebagai
                            </p>

                            <span className="text-sm font-semibold text-gray-700">
                                {user.username}
                            </span>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:border-red-300 hover:bg-red-100"
                    >
                        Logout
                    </button>

                </div>
            </div>
        </header>
    );
};

export default Header;