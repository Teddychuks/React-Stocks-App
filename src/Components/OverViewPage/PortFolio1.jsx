import { FaApple } from "react-icons/fa6";
import { LineChart, Line, Tooltip, YAxis } from "recharts";

import { useTimeSeries } from "../../Features/useTimeSeries";
import { useLivePricesArray } from "../../Features/useLivePriceArray";

import Spinner from "../../ui/Spinner";
import SmallSpinner from "../../ui/SmallSpinner";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    const datetimeParts = data.index.split(" ");
    const date = datetimeParts[0];
    const time = datetimeParts[1];

    return (
      <div className="custom-tooltip">
        <p className="label">{`Date: ${date}`}</p>
        <p className="label">{`Time: ${time}`}</p>
        <p className="label">{`Close: ${data.pv}`}</p>
      </div>
    );
  }
  return null;
};

function PortFolio1() {
  const { isLoading: isLoadingTimeSeries, timeseries } = useTimeSeries();
  const { isLoading: isLoadingLivePrices, livepricesarray } =
    useLivePricesArray();

  if (isLoadingLivePrices) return <Spinner />;
  if (isLoadingTimeSeries) return <SmallSpinner />;

  let reversedData = [];
  let maxValue = 0;
  let minValue = 0;

  if (timeseries) {
    const firstArray = timeseries[0];
    const data =
      firstArray?.map(({ datetime, close }) => ({
        index: datetime,
        pv: close,
      })) || [];

    reversedData = [...data].reverse();

    if (data.length > 0) {
      maxValue = Math.max(...data.map((entry) => entry.pv));
      minValue = Math.min(...data.map((entry) => entry.pv));
    }
  }

  return (
    <div>
      <div className="flex flex-col justify-center hover:bg-slate-200 rounded-xl p-3 md:p-5">
        <div className="flex justify-between items-center">
          <button className="py-3 flex justify-center items-center rounded-md border border-transparent font-semibold text-white hover:bg-blue-600 focus:outline-none text-sm bg-neutral-900">
            <FaApple className="w-6 h-6" />
            <span className="px-2 ">Apple Inc</span>
          </button>
        </div>

        <div className="mt-3 flex">
          <div className="flex flex-col flex-nowrap">
            <p className="mt-3 text-red-600 ">Price</p>
            {livepricesarray.price[0] ? (
              <p className="font-bold text-md">
                ${Number(livepricesarray?.price[0]).toFixed(2)}
              </p>
            ) : (
              <p className="text text-xs text-red-500 ">
                Refresh after 1 minute <SmallSpinner />
              </p>
            )}
            <span className="mt-5 relative text-md text-purple-600 font-medium cursor-pointer">
              Overview
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-600 transform origin-bottom scale-x-0 transition-transform group-hover:scale-x-100"></span>
            </span>
          </div>

          <div className="ml-10 sm:mt-4 sm:ml-auto mr-2 sm:mr-4">
            <span className="font-bold text-sm text-gray-500 px-36 mb-8">
              {livepricesarray.symbols[0]}
            </span>

            {!timeseries ? (
              <div className="text text-xs text-blue-500 ">
                Refresh after 1 minute <SmallSpinner />
              </div>
            ) : (
              <LineChart width={200} height={100} data={reversedData || []}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                  dot={false}
                />
                <YAxis type="number" domain={[minValue, maxValue]} hide />
                <Tooltip content={<CustomTooltip />} />
              </LineChart>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortFolio1;
