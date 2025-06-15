import Progressbar from "./Progressbar";

const Receivables = () => {
  return (
    <div className="receivables-card border-1 border-zinc-200 rounded-lg text-zinc-400 mt-10">
      <h2 className="border-b-1 border-zinc-200 pb-1 w-full p-4 text-lg font-[500]">
        TOTAL RECEIVABLES
      </h2>
      <div className="receivables-info flex flex-col p-4">
        <ul className="flex justify-between w-full">
          <li className="flex flex-col">
            <h3 className="text-green-400 font-bold">CURRENT</h3>
            <span className="receivable-amount font-bold text-black">
              $5400
            </span>
          </li>
          <li className="flex flex-col">
            <h3 className="text-orange-400 font-bold">OVERDUE</h3>
            <span className="receivable-amount font-bold text-black">
              $5400
            </span>
            <span className="text-zinc-400 font-bold">1-15 Days</span>
          </li>

          <li className="flex flex-col self-end">
            <span className="receivable-amount font-bold text-black">
              $5400
            </span>
            <span className="text-zinc-400 font-bold">16-30 Days</span>
          </li>
          <li className="flex flex-col self-end">
            <span className="receivable-amount font-bold text-black">
              $5400
            </span>
            <span className="text-zinc-400 font-bold">31-45 Days</span>
          </li>
          <li className="flex flex-col self-end">
            <span className="receivable-amount font-bold text-black">
              $5400
            </span>
            <span className="text-zinc-400 font-bold">45+ Days</span>
          </li>
        </ul>
        <Progressbar />
      </div>
    </div>
  );
};

export default Receivables;
