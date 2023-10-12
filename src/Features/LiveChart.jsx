import { FaApple } from "react-icons/fa6";
import { useState } from "react";
import VolumeChart from "../Components/OverViewPage/VolumeChart";
import GreedIndex from "../Components/OverViewPage/GreedIndex";

function LiveChart() {
  const [selectedArrayIndex, setSelectedArrayIndex] = useState(0);

  const handleArrayChange = (index) => {
    setSelectedArrayIndex(index);
  };

  return (
    <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto bg-slate-50 mt-5">
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg sm:max-w-full">
          <h1 className="text-xl font-semibold mb-3">Volume Chart</h1>
          <div className="flex justify-between items-center px-20">
            <button
              className={`py-3 px-4 m-2 flex items-center rounded-md border font-semibold text-white focus:outline-none text-sm   ${
                selectedArrayIndex === 0 ? "bg-neutral-900" : "bg-blue-600"
              } `}
              onClick={() => handleArrayChange(0)}
            >
              <FaApple className="w-6 h-6" />
            </button>

            <button
              className={`py-3 px-4 m-2 flex items-center rounded-md border font-semibold text-white focus:outline-none text-sm   ${
                selectedArrayIndex === 1 ? "bg-neutral-900" : "bg-sky-400"
              } `}
              onClick={() => handleArrayChange(1)}
            >
              <img src="google.png" alt="logo" className="w-6 h-6" />
            </button>

            <button
              className={`py-3 px-4 m-2 flex items-center rounded-md border font-semibold text-white focus:outline-none text-sm   ${
                selectedArrayIndex === 2 ? "bg-neutral-900" : "bg-indigo-500"
              } `}
              onClick={() => handleArrayChange(2)}
            >
              <img src="windows.png" alt="logo" className="w-6 h-6" />
            </button>

            <button
              className={`py-3 px-4 m-2 flex items-center rounded-md border font-semibold text-white focus:outline-none text-sm   ${
                selectedArrayIndex === 3 ? "bg-neutral-900" : "bg-purple-500"
              } `}
              onClick={() => handleArrayChange(3)}
            >
              <img src="nvidia.png" alt="logo" className="w-6 h-6" />
            </button>
          </div>
          <VolumeChart selectedArrayIndex={selectedArrayIndex} />
        </div>

        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg sm:max-w-full">
          <h1 className="text-xl font-semibold ">Fear and Greed Index</h1>
          <GreedIndex />
        </div>
      </div>
    </div>
  );
}

export default LiveChart;
