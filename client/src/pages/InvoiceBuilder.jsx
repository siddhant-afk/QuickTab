import React from "react";

const InvoiceBuilder = () => {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6">
      {/* Input Form */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Customer Details*/}
        <div>
          <label htmlFor="" className="block text-sm font-medium mb-1">
            Customer
          </label>
          <select className="w-full border rounded px-3 py-2 text-sm">
            <option value="">Select a customer</option>
            <option value="">Siddhant Dudhane</option>
            <option value="">Wellness Pharmacy</option>
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
            />
          </div>
          <div className="flex-1">
            <label htmlFor="" className="block text-sm font-medium mb-1">
              Due Date
            </label>
            <input
              type="date"
              className="w-full border rounded px-3 py-2 text-sm"
            />
          </div>
        </div>

        {/* Line Items */}
        <div>
          <label className="block text-sm font-medium mb-1">Line Items</label>
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Item name"
                className="flex-1 border rounded px-2 py-1 text-sm"
              />
              <input
                type="number"
                placeholder="Qty"
                className="w-16 border rounded px-2 py-1 text-sm"
              />
              <input
                type="number"
                placeholder="Price"
                className="w-24 border rounded px-2 py-1 text-sm"
              />
            </div>
            {/* + Add More (later) */}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea
            className="w-full border rounded px-3 py-2 text-sm"
            rows={3}
            placeholder="Additional notes or terms"
          />
        </div>

        {/* Save Button */}
        <div>
          <button className="bg-green-100 text-green-600 px-4 py-2 rounded hover:bg-green-200 text-sm">
            Save Invoice
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white shadow rounded p-4 border border-slate-200   "></div>
    </div>
  );
};

export default InvoiceBuilder;
