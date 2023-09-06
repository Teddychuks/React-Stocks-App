import SmallSpinner from "../../ui/SmallSpinner";
import TableHeader from "../../ui/Tableui/TableHeader";
import TableSpan from "../../ui/Tableui/TableSpan";
import TechnicalIndicesRow from "./TechnicalIndicesRow";

function TechnicalIndicesCol({ isLoading, currentData, startIndex }) {
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
              <TableSpan type="tableheader">Hourly</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Daily</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Weekly</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Monthly</TableSpan>
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
              <TechnicalIndicesRow
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

export default TechnicalIndicesCol;
