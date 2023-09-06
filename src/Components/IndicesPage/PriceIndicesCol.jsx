import SmallSpinner from "../../ui/SmallSpinner";
import TableHeader from "../../ui/Tableui/TableHeader";
import TableSpan from "../../ui/Tableui/TableSpan";
import PriceIndicesRow from "./PriceIndicesRow";

function PriceIndicesCol({ isLoading, currentData, startIndex }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 divide-y divide-gray-200">
          <tr>
            <TableHeader>
              <TableSpan type="tableheader">Name</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Last</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">High</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Low</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Change</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Change Percentage</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Time</TableSpan>
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
              <PriceIndicesRow
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

export default PriceIndicesCol;
