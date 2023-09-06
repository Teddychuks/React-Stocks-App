function TableData({ children, name, index }) {
  if (name) {
    return (
      <td className="h-px w-auto whitespace-nowrap">
        <div className="px-6 py-2 flex items-center gap-x-3">
          <span className="">{index + 1}</span>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">
              {children}
            </span>
          </div>
        </div>
      </td>
    );
  }

  return (
    <td className="h-px w-auto whitespace-nowrap">
      <div className="px-6 py-2">
        <span className="text-sm text-gray-800 ">{children}</span>
      </div>
    </td>
  );
}

export default TableData;
