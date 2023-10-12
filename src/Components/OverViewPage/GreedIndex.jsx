import { useGreedIndex } from "../../Features/useGreedIndex";
import SmallSpinner from "../../ui/SmallSpinner";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height}
      Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const getColorForValueText = (valueText) => {
  switch (valueText) {
    case "Neutral":
      return "#4ade80";
    case "Extreme Greed":
      return "#16a34a";
    case "Extreme Fear":
      return "#b91c1c";
    case "Fear":
      return "#ef4444";
    default:
      return "#8884d8";
  }
};

export default function GreedIndex() {
  const { isLoading, greedindex } = useGreedIndex();

  const invertedData =
    !isLoading && greedindex
      ? [
          {
            name: "now",
            value: greedindex.now.value,
            valueText: greedindex.now.valueText,
          },
          {
            name: "previous",
            value: greedindex.previousClose.value,
            valueText: greedindex.previousClose.valueText,
          },
          {
            name: "1 week",
            value: greedindex.oneWeekAgo.value,
            valueText: greedindex.oneWeekAgo.valueText,
          },
          {
            name: "1 month",
            value: greedindex.oneMonthAgo.value,
            valueText: greedindex.oneMonthAgo.valueText,
          },
          {
            name: "1 year",
            value: greedindex.oneYearAgo.value,
            valueText: greedindex.oneYearAgo.valueText,
          },
        ].reverse()
      : [];
  return (
    <ResponsiveContainer width="100%" height={300}>
      {isLoading ? (
        <div className="text text-xs text-blue-500 ">
          Refresh after 1 minute <SmallSpinner />
        </div>
      ) : (
        <BarChart
          width={700}
          height={300}
          data={invertedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="mt-16"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={({ payload }) => {
              if (payload && payload[0]) {
                const { valueText } = payload[0].payload;
                return (
                  <div className="custom-tooltip">
                    <p>{valueText}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar
            dataKey="value"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{
              position: "top",
              fill: "#444",
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            <LabelList
              dataKey="valueText"
              position="top"
              content={({ value, ...props }) => {
                const isExtremeGreed = value === "Extreme Greed";
                const textColor = isExtremeGreed ? "#FF0000" : "#666";
                const fontSize = isExtremeGreed ? 14 : 12;
                const xShift = isExtremeGreed ? -8 : 0;
                const yShift = isExtremeGreed ? -17 : 4;
                const isNeutral = value === "Neutral";
                const yaxisShift = isNeutral ? -20 : 0;

                return (
                  <text
                    {...props}
                    y={props.y + yShift + yaxisShift}
                    x={props.x + xShift}
                    fill={textColor}
                    fontSize={fontSize}
                  >
                    {value}
                  </text>
                );
              }}
            />

            {invertedData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={getColorForValueText(entry.valueText)}
              />
            ))}
          </Bar>
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}
