import {
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", revenue: 3200 },
  { month: "Feb", revenue: 4200 },
  { month: "Mar", revenue: 2900 },
  { month: "Apr", revenue: 5300 },
  { month: "May", revenue: 4800 },
];

const RevenueChart = () => {
  return (
    <div className="w-full  p-4 ">
      <h3 className="text-lg mb-5 ps-0">Monthly Revenue</h3>
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#05df72"
            fill="url(#green)"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
