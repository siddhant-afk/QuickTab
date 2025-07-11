import { useState } from "react";
import CustomerModal from "../components/CustomerModal";

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
  const [customers, setCustomers] = useState(mockCustomers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null);

  function handleAddClick() {
    setEditCustomer(null);
    setModalOpen(true);
  }

  function handleEditClick(customer) {
    setEditCustomer(customer);
    setModalOpen(true);
  }
  function handleModalSubmit(formData) {
    if (editCustomer) {
      setCustomers((prev) =>
        prev.map((customer) =>
          customer.id === editCustomer.id
            ? { ...customer, ...formData }
            : customer
        )
      );
    } else {
      const newCustomer = {
        ...formData,
        id: `CUST-${String(customers.length + 1).padStart(3, "0")}`,
        outstanding: 0,
      };
      setCustomers((prev) => [...prev, newCustomer]);
    }
  }
  return (
    <div className="p-4 pt-15">
      <div className="flex justify-between mb-4">
        <h1 className="text-4xl text-slate-700 font-semibold">🧑‍💼 Customers</h1>
        <button
          onClick={handleAddClick}
          className="bg-slate-900 text-white hover:bg-slate-800 px-4 py-2 text-sm rounded-sm"
        >
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
            {customers.map((customer) => (
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
                  <button
                    onClick={() => handleEditClick(customer)}
                    className="text-sm text-slate-600 mr-2 hover:underline"
                  >
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
      <CustomerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleModalSubmit}
        initialData={editCustomer}
      />
    </div>
  );
};

export default CustomersPage;
