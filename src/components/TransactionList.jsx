import { useNavigate } from "react-router-dom"; 
import { formatRupiah } from "../utils/formatRupiah";

function TransactionList({ items = [] }) {
    const navigate = useNavigate()

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <div className="border-b border-gray-100 px-5 py-4">
        <h2 className="font-semibold text-gray-900">
          Daftar Transaksi
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          {items.length} transaksi ditemukan
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead className="bg-gray-50">
            <tr className="text-xs font-semibold uppercase tracking-wide text-gray-500">

              <th className="px-5 py-3">
                ID
              </th>

              <th className="px-5 py-3">
                Tanggal
              </th>

              <th className="px-5 py-3">
                Judul
              </th>

              <th className="px-5 py-3">
                Tipe
              </th>

              <th className="px-5 py-3 text-right">
                Nominal
              </th>

            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">

            {items.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="px-5 py-10 text-center"
                >
                  <p className="text-sm font-medium text-gray-600">
                    Tidak ada transaksi
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Tidak ada transaksi yang sesuai dengan filter.
                  </p>
                </td>
              </tr>
            ) : (
              items.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => navigate(`/transactions/${items.id}`)}
                  className="cursor-pointer transition hover:bg-gray-50"
                >

                  <td className="px-5 py-4 text-sm text-gray-400">
                    #{item.id}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {item.date}
                  </td>

                  <td className="px-5 py-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {item.category}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                        item.type === "INCOME"
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {item.type === "INCOME"
                        ? "Pemasukan"
                        : "Pengeluaran"}
                    </span>
                  </td>

                  <td
                    className={`px-5 py-4 text-right text-sm font-semibold ${
                      item.type === "INCOME"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.type === "INCOME"
                      ? "+"
                      : "-"}{" "}

                    {formatRupiah(item.amount)}
                  </td>

                </tr>
              ))
            )}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;