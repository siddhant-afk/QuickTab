import { useNavigate } from "react-router-dom";

const mockInvoices = [
  {
    id: "INV-001",
    customer: "Arjun Malhotra",
    issueDate: "2025-06-01",
    dueDate: "2025-06-07",
    amount: 5400,
    status: "Paid",
  },
  {
    id: "INV-002",
    customer: "Wellness Pharmacy",
    issueDate: "2025-06-10",
    dueDate: "2025-06-20",
    amount: 2100,
    status: "Overdue",
  },
  {
    id: "INV-003",
    customer: "Sanya Kapoor",
    issueDate: "2025-06-14",
    dueDate: "2025-06-25",
    amount: 3200,
    status: "Unpaid",
  },
  {
    id: "INV-004",
    customer: "Nikita Deshmukh",
    issueDate: "2025-06-18",
    dueDate: "2025-06-28",
    amount: 1500,
    status: "Draft",
  },
];

const InvoicesPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4 pt-15">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-4xl text-slate-700 font-semibold">🧾 Invoices</h2>
        <button
          className="bg-green-100 text-green-600 px-4 py-2 rounded hover:bg-green-200 text-sm"
          onClick={() => navigate("/invoices/new")}
        >
          + New Invoice
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-200 text-gray-600">
            <tr>
              <th className="px-4 py-2">Invoice ID</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Issue Date</th>
              <th className="px-4 py-2">Due Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockInvoices.map((invoice) => (
              <tr
                key={invoice.id}
                className="border-b border-slate-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 font-medium">{invoice.id}</td>
                <td className="px-4 py-2">{invoice.customer}</td>
                <td className="px-4 py-2">{invoice.issueDate}</td>
                <td className="px-4 py-2">{invoice.dueDate}</td>
                <td className="px-4 py-2">₹{invoice.amount}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Unpaid"
                        ? "bg-orange-100 text-orange-700"
                        : invoice.status === "Overdue"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <button className="text-slate-600 hover:underline mr-2">
                    View
                  </button>
                  <button className="text-slate-600 hover:underline">
                    Edit
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

export default InvoicesPage;
