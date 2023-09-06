function MostActivePerformanceRow({ data, index }) {
  return (
    <tr>
      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2 flex items-center gap-x-3">
          <span className="">{index}</span>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
              {data.name}
            </span>
          </div>
        </div>
      </td>

      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2">
          <span className="font-semibold text-sm text-gray-800 ">
            {data.daily}
          </span>
        </div>
      </td>

      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2">
          <span className="text-sm text-gray-800 ">{data.oneWeek}</span>
        </div>
      </td>
      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2">
          <span className="text-sm text-gray-800 ">{data.oneMonth}</span>
        </div>
      </td>
      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2">
          <span className="text-sm text-gray-800 ">{data.yearToDate}</span>
        </div>
      </td>
      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2">
          <span className="text-sm text-gray-800 ">{data.oneYear}</span>
        </div>
      </td>
      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2">
          <span className="text-sm text-gray-800 ">{data.threeYear}</span>
        </div>
      </td>
    </tr>
  );
}

export default MostActivePerformanceRow;
