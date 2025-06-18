import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", paid: 8, unpaid: 4, overdue: 2 },
  { month: "Feb", paid: 10, unpaid: 2, overdue: 3 },
  { month: "Mar", paid: 5, unpaid: 3, overdue: 5 },
  { month: "Apr", paid: 12, unpaid: 1, overdue: 2 },
  { month: "May", paid: 9, unpaid: 2, overdue: 4 },
];

const InvoiceStatusChart = () => {
  return (
    <div className="w-full p-4">
      <h3 className="text-lg ps-11 mb-5">Invoice Status Over Time</h3>
      <ResponsiveContainer width="100%" height={275}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="paid" stackId="a" fill="#05df72" name="Paid" />
          <Bar dataKey="unpaid" stackId="a" fill="#fdba74" name="Unpaid" />
          <Bar
            dataKey="overdue"
            stackId="a"
            fill="#fb923c"
            name="Overdue"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvoiceStatusChart;
