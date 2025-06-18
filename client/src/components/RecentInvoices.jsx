const recentInvoices = [
  {
    id: "INV-1005",
    customer: "Maya Rao",
    date: "2025-06-10",
    due: "2025-06-15",
    amount: 1250,
    status: "Paid",
  },
  {
    id: "INV-1004",
    customer: "Omkar Kulkarni",
    date: "2025-06-09",
    due: "2025-06-12",
    amount: 3200,
    status: "Pending",
  },
  {
    id: "INV-1003",
    customer: "Riya Deshmukh",
    date: "2025-06-07",
    due: "2025-06-10",
    amount: 2100,
    status: "Overdue",
  },
  {
    id: "INV-1002",
    customer: "Siddharth Sharma",
    date: "2025-06-05",
    due: "2025-06-09",
    amount: 4500,
    status: "Paid",
  },
  {
    id: "INV-1001",
    customer: "Nisha Patil",
    date: "2025-06-03",
    due: "2025-06-06",
    amount: 3900,
    status: "Pending",
  },
];

function getStatusClasses(status) {
  switch (status) {
    case "Paid":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-orange-100 text-orange-700";
    case "Overdue":
      return "bg-red-100 text-red-700";
    default:
      return "";
  }
}

const RecentInvoices = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Invoices</h2>
        <button className="text-sm text-slate-600 hover:underline">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="text-gray-600">
              <th className="px-4 py-2">Invoice ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Due</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {recentInvoices.map((invoice) => (
              <tr key={invoice.id} className=" hover:bg-gray-50">
                <td className="px-4 py-4 font-medium">{invoice.id}</td>
                <td className="px-4 py-4">{invoice.customer}</td>
                <td className="px-4 py-4">{invoice.date}</td>
                <td className="px-4 py-4">{invoice.due}</td>
                <td className="px-4 py-4">₹{invoice.amount}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1 rounded-sm text-xs font-medium ${getStatusClasses(
                      invoice.status
                    )}`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <button className="text-slate-600 hover:underline text-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentInvoices;
