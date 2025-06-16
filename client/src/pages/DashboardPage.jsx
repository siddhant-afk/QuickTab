import InvoiceStatusChart from "../components/InvoiceStatusChart";
import Receivables from "../components/Receivables";
import RevenueChart from "../components/RevenueChart";

const DashboardPage = () => {
  return (
    <section className="dashboard p-5 ps-10">
      <h1 className="text-4xl font-bold text-slate-700">Your overview</h1>

      <Receivables />

      <div className="dashboard-charts-container flex gap-5">
        <RevenueChart />
        <InvoiceStatusChart />
      </div>
    </section>
  );
};

export default DashboardPage;
