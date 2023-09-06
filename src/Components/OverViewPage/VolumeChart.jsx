import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTimeSeries } from "../../Features/useTimeSeries";
import Spinner from "../../ui/Spinner";
import SmallSpinner from "../../ui/SmallSpinner";

const formatVolumeWithCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;

    const datetimeParts = data.datetime.split(" ");
    const date = datetimeParts[0];
    const time = datetimeParts[1];

    return (
      <div className="custom-tooltip">
        <p className="label">{`Date: ${date}`}</p>
        <p className="label">{`Time: ${time}`}</p>
        <p className="label">{`Volume: ${formatVolumeWithCommas(
          data.volume
        )}`}</p>
      </div>
    );
  }
  return null;
};

const VolumeChart = ({ selectedArrayIndex }) => {
  const { isLoading, timeseries } = useTimeSeries();

  if (isLoading) return <Spinner />;

  const mainArray = timeseries[selectedArrayIndex];
  const data = mainArray.map(({ datetime, volume }) => ({
    datetime,
    volume: parseFloat(volume),
  }));

  data.reverse();

  const formatTime = (time) => {
    const formattedTime = new Date(time).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return formattedTime;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      {!mainArray ? (
        <div className="text text-xs text-blue-500 ">
          Refresh after 1 minute <SmallSpinner />
        </div>
      ) : (
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="datetime" tickFormatter={formatTime} />
          <YAxis tickFormatter={formatVolumeWithCommas} />

          <Tooltip content={<CustomTooltip />} />

          <Legend />
          <Line
            type="monotone"
            dataKey="volume"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ stroke: "#8884d8", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      )}
    </ResponsiveContainer>
  );
};

export default VolumeChart;
