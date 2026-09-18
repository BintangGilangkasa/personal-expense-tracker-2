function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">
          404
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-gray-800">
          Halaman tidak ditemukan
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Halaman yang Anda cari tidak tersedia.
        </p>
      </div>
    </main>
  );
}

export default NotFoundPage;