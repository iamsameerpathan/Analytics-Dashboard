export default function SkeletonLoader() {
    return (
      <>
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="bg-gray-300 animate-pulse rounded-md p-6">
            <div className="h-4 bg-gray-400 rounded w-2/3 mb-4"></div>
            <div className="h-3 bg-gray-400 rounded w-1/2"></div>
          </div>
        ))}
      </>
    );
  }
  