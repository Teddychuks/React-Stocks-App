import { useState } from "react";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
import { useIndices } from "./useIndices";

import TableButton from "../../ui/Tableui/TableButton";
import TableFooter from "../../ui/Tableui/TableFooter";
import Spinner from "../../ui/Spinner";

import PriceIndicesCol from "./PriceIndicesCol";
import PerformanceIndicesCol from "./PerformanceIndicesCol";
import TechnicalIndicesCol from "./TechnicalIndicesCol";

function IndicesTable() {
  const { isLoading, indices } = useIndices();
  const [currentPage, setCurrentPage] = useState(1);
  const [currentDataType, setCurrentDataType] = useState(0);

  if (isLoading) {
    return <Spinner />;
  }

  const itemsPerPage = 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData =
    indices[currentDataType]?.slice(startIndex, endIndex) || [];
  const totalPages = Math.ceil(
    (indices[currentDataType]?.length || 0) / itemsPerPage
  );

  function goToPage(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  function handleDataTypeChange(newDataType) {
    setCurrentDataType(newDataType);
  }
  return (
    <div className="w-full  px-4 py-10 sm:px-6 lg:px-8 lg:py-5 mx-auto bg-slate-50 mt-5 ">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg ">
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 ">
                    Major Indices
                  </h2>
                </div>

                <div>
                  <div className="inline-flex gap-x-2">
                    <TableButton
                      type="operations"
                      onClick={() => handleDataTypeChange(0)}
                      isActive={currentDataType === 0}
                    >
                      Price
                    </TableButton>
                    <TableButton
                      type="operations"
                      onClick={() => handleDataTypeChange(1)}
                      isActive={currentDataType === 1}
                    >
                      Performance
                    </TableButton>
                    <TableButton
                      type="operations"
                      onClick={() => handleDataTypeChange(2)}
                      isActive={currentDataType === 2}
                    >
                      Technical
                    </TableButton>
                  </div>
                </div>
              </div>
              {/*  */}

              <div>
                {currentDataType === 0 && (
                  <PriceIndicesCol
                    currentData={currentData}
                    isLoading={isLoading}
                    startIndex={startIndex}
                  />
                )}
                {currentDataType === 1 && (
                  <PerformanceIndicesCol
                    currentData={currentData}
                    isLoading={isLoading}
                    startIndex={startIndex}
                  />
                )}
                {currentDataType === 2 && (
                  <TechnicalIndicesCol
                    currentData={currentData}
                    isLoading={isLoading}
                    startIndex={startIndex}
                  />
                )}

                <TableFooter>
                  <div>
                    <p className="text-sm text-gray-600 flex gap-2">
                      <span className="font-semibold text-gray-800">
                        {startIndex + 1}-{Math.min(endIndex, indices[0].length)}
                      </span>
                      <span>of {indices[0].length} results</span>
                    </p>
                  </div>

                  <div>
                    <div className="inline-flex gap-x-2">
                      <TableButton
                        type="footerbutton"
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                      >
                        <HiArrowSmallLeft />
                        Prev
                      </TableButton>

                      <TableButton
                        type="footerbutton"
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={
                          currentPage ===
                          Math.ceil(indices[0].length / itemsPerPage)
                        }
                      >
                        <HiArrowSmallRight />
                        Next
                      </TableButton>
                    </div>
                  </div>
                </TableFooter>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndicesTable;
