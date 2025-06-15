const Progressbar = () => {
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden flex mt-10 mb-3">
      <div className="bg-green-400 h-full" style={{ width: "20%" }}></div>
      <div className="bg-orange-400 h-full" style={{ width: "20%" }}></div>
      <div className="bg-orange-300 h-full" style={{ width: "20%" }}></div>
      <div className="bg-orange-200 h-full" style={{ width: "20%" }}></div>
      <div className="bg-orange-100 h-full" style={{ width: "20%" }}></div>
    </div>
  );
};

export default Progressbar;
