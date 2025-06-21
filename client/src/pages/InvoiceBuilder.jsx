import { useState } from "react";
import InvoicePreview from "../components/InvoicePreview";

const InvoiceBuilder = () => {
  const [invoiceData, setInvoiceData] = useState({
    customer: "",
    issueDate: "",
    dueDate: "",
    items: [],
    notes: "",
  });

  const [itemInput, setItemInput] = useState({
    name: "",
    qty: 1,
    price: "",
  });

  function handleItemAdd() {
    if (!itemInput.name || !itemInput.price) return;

    setInvoiceData((prev) => ({
      ...prev,
      items: [...(prev.items || []), { ...itemInput }],
    }));

    setItemInput({
      name: "",
      qty: 1,
      price: "",
    });
  }

  function handleSaveInvoice() {}

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6 h-full">
      {/* Input Form */}
      <div className="w-full lg:w-1/2 space-y-4 ">
        {/* Customer Details*/}
        <div>
          <label htmlFor="" className="block text-sm font-medium mb-1">
            Customer
          </label>
          <select
            value={invoiceData.customer}
            className="w-full border rounded px-3 py-2 text-sm"
            onChange={(e) =>
              setInvoiceData({ ...invoiceData, customer: e.target.value })
            }
          >
            <option value="">Select a customer</option>
            <option value="Siddhant Dudhane">Siddhant Dudhane</option>
            <option value="Wellness Pharmacy">Wellness Pharmacy</option>
          </select>
        </div>

        {/* Invoice Details */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label htmlFor="" className="block text-sm font-medium mb-1">
              Issue Date
            </label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 text-sm"
              onChange={(e) =>
                setInvoiceData({ ...invoiceData, issueDate: e.target.value })
              }
            />
          </div>
          <div className="flex-1">
            <label htmlFor="" className="block text-sm font-medium mb-1">
              Due Date
            </label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 text-sm"
              onChange={(e) =>
                setInvoiceData({ ...invoiceData, dueDate: e.target.value })
              }
            />
          </div>
        </div>

        {/* Line Items */}
        <div>
          <label className="block text-sm font-medium mb-1">Line Items</label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                value={itemInput.name}
                type="text"
                placeholder="Item name"
                className="flex-1 border rounded px-2 py-1 text-sm"
                onChange={(e) =>
                  setItemInput({ ...itemInput, name: e.target.value })
                }
              />
              <input
                value={itemInput.qty}
                type="number"
                placeholder="Qty"
                className="w-16 border rounded px-2 py-1 text-sm"
                onChange={(e) =>
                  setItemInput({ ...itemInput, qty: e.target.value })
                }
              />
              <input
                value={itemInput.price}
                type="number"
                placeholder="Price"
                className="w-24 border rounded px-2 py-1 text-sm"
                onChange={(e) =>
                  setItemInput({ ...itemInput, price: e.target.value })
                }
              />
            </div>
            <button
              className="text-slate-600  px-3 text-sm py-1 hover:underline hover:underline-offset-2 rounded mt-2"
              onClick={handleItemAdd}
            >
              {" "}
              + Add Item
            </button>

            <div className="mt-4 space-y-2">
              {invoiceData.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border rounded px-3 py-2 bg-slate-100 text-sm"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="font-xs text-gray-600">
                      {item.qty} x ₹{item.price}
                    </p>
                  </div>
                  <button
                    className="text-red-600 text-2xl font-normal cursor-pointer"
                    onClick={() =>
                      setInvoiceData((prev) => ({
                        ...prev,
                        items: prev.items.filter((_, i) => i !== index),
                      }))
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-x-icon lucide-x"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            value={invoiceData.notes}
            className="w-full border rounded px-3 py-2 text-sm"
            rows={3}
            placeholder="Additional notes or terms"
            onChange={(e) =>
              setInvoiceData({ ...invoiceData, notes: e.target.value })
            }
          />
        </div>

        {/* Save Button */}
        <div>
          <button
            className="bg-green-100 text-green-600 px-4 py-2 rounded hover:bg-green-200 text-sm"
            onClick={handleSaveInvoice}
          >
            Save Invoice
          </button>
        </div>
      </div>

      {/* Invoice Preview */}
      <div className="w-full lg:w-1/2 bg-white shadow rounded p-6 border border-slate-200 h-full overflow-y-auto">
        <InvoicePreview data={invoiceData} />
      </div>
    </div>
  );
};

export default InvoiceBuilder;
