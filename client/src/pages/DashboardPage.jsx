import Receivables from "../components/Receivables";

const DashboardPage = () => {
  return (
    <section className="dashboard p-5 ps-10">
      <h1 className="text-4xl font-bold">Your overview</h1>

      <Receivables />
    </section>
  );
};

export default DashboardPage;
