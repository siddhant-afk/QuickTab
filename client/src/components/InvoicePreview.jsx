const InvoicePreview = ({ data }) => {
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const discount = 100;
  const total = subtotal - discount;
  return (
    <>
      {/* Invoice Header */}

      <div className="mb-6 invoice-heading">
        <h1 className="text-xl font-semibold text-slate-700">Invoice</h1>
        <p>Invoice ID: INV-005</p>
        <p>Issue Date : {data.issueDate}</p>
        <p>Due Date : {data.dueDate}</p>
      </div>

      {/* Customer Info */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-slate-600 mb-1 ">
          Billed To:
        </h2>
        <p className="text-sm text-slate-700">{data.customer}</p>
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
            {data?.items?.map((item, index) => (
              <tr key={index} className="border-t border-slate-200">
                <td>{item.name}</td>
                <td className="text-right">{item.qty}</td>
                <td className="text-right">₹{item.price}</td>
                <td className="text-right">₹{item.qty * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Total Amount */}
      <div className="mb-6 text-sm text-slate-700 space-y-1">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>₹{discount}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>

      {/* Notes Section */}
      <div>
        <h2 className="text-sm font-semibold text-slate-600 mb-1">Notes:</h2>
        <p className="text-sm text-slate-700">{data.notes}</p>
      </div>
    </>
  );
};

export default InvoicePreview;
