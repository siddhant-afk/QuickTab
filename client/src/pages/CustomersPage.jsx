const mockCustomers = [
  {
    id: "CUST-001",
    name: "Riya Sharma",
    email: "riya@example.com",
    phone: "+91 98765 43210",
    outstanding: 2500,
  },
  {
    id: "CUST-002",
    name: "Dr. Aarav Patel",
    email: "aarav@clinicmail.com",
    phone: "+91 90210 12345",
    outstanding: 0,
  },
  {
    id: "CUST-003",
    name: "Freelance Studio",
    email: "",
    phone: "+91 99887 66554",
    outstanding: 1200,
  },
];

const CustomersPage = () => {
  return (
    <div className="p-4 pt-15">
      <div className="flex justify-between mb-4">
        <h1 className="text-4xl text-slate-700 font-semibold">🧑‍💼 Customers</h1>
        <button className="bg-green-100 text-green-600 hover:bg-green-200 px-4 py-2 text-sm rounded-sm">
          {" "}
          + Add Customer
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-200">
            <tr className="text-gray-600">
              <th className="px-4 py-2">Customer ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone No:</th>
              <th className="px-4 py-2">Outstanding</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockCustomers.map((customer) => (
              <tr
                key={customer.id}
                className="hover:bg-gray-50 border-b border-slate-200"
              >
                <td className="px-4 py-2">{customer.id}</td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.phone}</td>
                <td className="px-4 py-2">{customer.outstanding}</td>
                <td className="px-4 py-2 text-right">
                  <button className="text-sm text-slate-600 mr-2 hover:underline">
                    Edit
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Delete
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

export default CustomersPage;
