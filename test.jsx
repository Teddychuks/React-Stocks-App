import SpinnerText from "../../ui/SpinnerText";
import { useEconomyNews } from "./useEconomyNews";

function EconomyNews() {
  const { isLoading, economynews } = useEconomyNews();

  return (
    <div className=" mx-auto px-4 sm:px-6 mt-16">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-900">Economy News</h2>
        <p className="mt-2 text-gray-600">
          Keep yourself informed about the latest developments in the economy
          and the global market.
        </p>
      </div>

      {isLoading ? (
        <div className="text-center">
          <SpinnerText />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {economynews.map((item, index) => (
            <div
              key={index}
              className="bg-slate-100  shadow-lg rounded-lg overflow-hidden hover:shadow-xl"
            >
              <div className="p-6">
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EconomyNews;
