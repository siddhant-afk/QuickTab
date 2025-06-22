import { forwardRef } from "react";

const InvoicePreview = forwardRef(({ data }, ref) => {
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const discount = 100;
  const total = subtotal - discount;
  return (
    <div
      className="invoice-pdf rounded p-6 border h-full overflow-y-auto"
      ref={ref}
    >
      {/* Invoice Header */}

      <div className="mb-6 ">
        <h1 className="text-xl font-semibold">Invoice</h1>
        <p>Invoice ID: INV-005</p>
        <p>Issue Date : {data.issueDate}</p>
        <p>Due Date : {data.dueDate}</p>
      </div>

      {/* Customer Info */}
      <div className="mb-6">
        <h2 className="text-sm font-semibold  mb-1 ">Billed To:</h2>
        <p className="text-sm ">{data.customer}</p>
      </div>

      {/* Line Items Table */}
      <div className="mb-6 invoice-table">
        <table className="w-full text-sm ">
          <thead>
            <tr>
              <th className="text-left">Item</th>
              <th className="text-right">Qty</th>
              <th className="text-right">Price</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {data?.items?.map((item, index) => (
              <tr key={index}>
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
      <div className="mb-6 text-sm space-y-1">
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
        <h2 className="text-sm font-semibold mb-1">Notes:</h2>
        <p className="text-sm ">{data.notes}</p>
      </div>
    </div>
  );
});

export default InvoicePreview;
