import SmallSpinner from "../../ui/SmallSpinner";
import TableHeader from "../../ui/Tableui/TableHeader";
import TableSpan from "../../ui/Tableui/TableSpan";
import MostActiveFundamentalRow from "./MostActiveFundamentalRow";

function MostActiveFundamentalCol({ isLoading, currentData, startIndex }) {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 divide-y divide-gray-200">
          <tr>
            <TableHeader>
              <TableSpan type="tableheader">Name</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Market capitalization</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Revenue</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Ratio</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Beta</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Eps</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Dividend</TableSpan>
            </TableHeader>

            <TableHeader>
              <TableSpan type="tableheader">Next Earning Date</TableSpan>
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
              <MostActiveFundamentalRow
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

export default MostActiveFundamentalCol;
