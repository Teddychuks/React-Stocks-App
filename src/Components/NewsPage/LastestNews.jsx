import SpinnerText from "../../ui/SpinnerText";
import { useLatestNews } from "./useLatestNews";

function LatestNews() {
  const { isLoading, latestnews } = useLatestNews();

  return (
    <div className="mx-auto px-4 sm:px-6">
      <div className="lg:w-full">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-gray-900">Latest News</h2>
          <p className="mt-2 text-gray-600">
            Stay updated with the most recent articles and latest market news
            around the world
          </p>
        </div>

        {isLoading ? (
          <div>
            <SpinnerText />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestnews.map((item, index) => (
              <div
                key={index}
                className="transform rounded-lg bg-slate-100 shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl"
              >
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.newsTitle}
                  </h3>
                  <p className="text-gray-600 flex-grow">{item.shotDesc}</p>
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
    </div>
  );
}

export default LatestNews;
