const InvoicePreview = () => {
  return (
    <>
      {/* Invoice Header */}

      <div className="mb-6 invoice-heading">
        <h1 className="text-xl font-semibold text-slate-700">Invoice</h1>
        <p>Invoice ID: INV-005</p>
        <p>Issue Date : 2025-06-21</p>
        <p>Due Date : 2025-06-30</p>
      </div>

      {/* Customer Info */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-slate-600 mb-1 ">
          Billed To:
        </h2>
        <p className="text-sm text-slate-700">Siddhant Dudhane</p>
      </div>

      {/* Line Items Table */}
      <div className="mb-6 invoice-table">
        <table className="w-full text-sm border border-slate-200">
          <thead className="bg-slate-100">
            <tr className="text-slate-600">
              <th className="text-left">Item</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-slate-200">
              <td>Consultation</td>
              <td className="text-right">1</td>
              <td className="text-right">₹1500</td>
              <td className="text-right">₹1500</td>
            </tr>

            <tr className="border-t border-slate-200">
              <td>Vitamin C</td>
              <td className="text-right">2</td>
              <td className="text-right">₹250</td>
              <td className="text-right">₹500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="mb-6 text-sm text-slate-700 space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹2000</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>₹100</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹1900</span>
        </div>
      </div>

      {/* Notes Section */}
      <div>
        <h2 className="text-sm font-semibold text-slate-600 mb-1">Notes</h2>
        <p className="text-sm text-slate-700">
          Thank you for your business. Payment is due within 7 days.
        </p>
      </div>
    </>
  );
};

export default InvoicePreview;
