import SmallSpinner from "../../ui/SmallSpinner";
import TableHeader from "../../ui/Tableui/TableHeader";
import TableSpan from "../../ui/Tableui/TableSpan";
import MostActivePerformanceRow from "./MostActivePerformanceRow";

function MostActivePerformanceCol({ isLoading, currentData, startIndex }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 divide-y divide-gray-200">
          <tr>
            <TableHeader>
              <TableSpan type="tableheader">Name</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Daily</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">One Week</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">One Month</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Yearly Return</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">One Year</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Three Years</TableSpan>
            </TableHeader>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 ">
          {isLoading ? (
            <div>
              <SmallSpinner />
            </div>
          ) : (
            currentData.map((data, index) => (
              <MostActivePerformanceRow
                data={data}
                key={data.name}
                index={startIndex + index + 1}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MostActivePerformanceCol;
