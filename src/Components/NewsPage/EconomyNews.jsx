import SpinnerText from "../../ui/SpinnerText";
import { useEconomyNews } from "./useEconomyNews";

function EconomyNews() {
  const { isLoading, economynews } = useEconomyNews();

  return (
    <div className="container mx-auto mt-8 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Economy News</h2>
        <p className="mt-2 text-gray-600">
          Stay informed about the latest developments in the economy and global
          markets.
        </p>
      </div>

      {isLoading ? (
        <div className="text-center mt-8">
          <SpinnerText />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {economynews.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100 border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.newsTitle}
              </h3>
              <p className="text-gray-600">{item.shotDesc}</p>
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-gray-500">{item.postedOn}</p>
                <a
                  href={item.newsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EconomyNews;
