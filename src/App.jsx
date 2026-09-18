import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute.jsx";

// Pages
import LoginPage from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import TransactionAdd from "./pages/AddTransaction.jsx";
import EditTransaction from "./pages/EditTransaction.jsx";
import TransactionDetail from "./pages/TransactionDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import { addTransaction } from "./features/transactions/transactions.js";

import "./index.css"

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <Routes>

            <Route
                path="/login"
                element={
                    <LoginPage onLogin={handleLogin} />
                }
            />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute isAuthenticated={isLoggedIn}>
                        <Dashboard onLogout={handleLogout} />
                    </ProtectedRoute>
                }
            />  

            <Route
                path="/transactions"
                element={
                    <ProtectedRoute isAuthenticated={isLoggedIn}>
                        <Transactions />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/"
                element={
                    <Navigate
                        to={isLoggedIn ? "/dashboard" : "/login"}
                        replace
                    />
                }
            />

            <Route 
                path="/transactions/add"
                element={
                    <ProtectedRoute isAuthenticated={isLoggedIn}>
                        <TransactionAdd />
                    </ProtectedRoute>
                }
            />

            <Route 
                path="/transactions/:id/edit"
                element={
                    <ProtectedRoute isAuthenticated={isLoggedIn}> 
                        <EditTransaction />
                    </ProtectedRoute>
                }
            />

            <Route 
                path="/transactions/:id"
                element={
                    <ProtectedRoute isAuthenticated={isLoggedIn}>
                        <TransactionDetail />
                    </ProtectedRoute>
                }
            />

            <Route 
                path="*"
                element={
                    <NotFoundPage />
                }
            />

        </Routes>
    );
}

export default App;