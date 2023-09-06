import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";

function SearchStocks() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="relative">
        <input
          type="text"
          className="w-40 py-2 sm:py-3 px-6 pl-11 block sm:w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          placeholder="Search Stocks"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
          <HiOutlineSearch className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </form>
  );
}

export default SearchStocks;
