
 const MenuItemLoading = () => {
  return (
    <div className="flex h-[120px] rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-lg animate-pulse">
      
      {/* Left Image Placeholder */}
      <div className="w-1/3 h-full bg-gray-300 dark:bg-gray-700"></div>

      {/* Right Side Placeholder */}
      <div className="w-2/3 h-full flex flex-col justify-center px-3 py-2 space-y-2">
        
        {/* Title Skeleton */}
        <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded-md"></div>

        {/* Description Skeleton (2 lines) */}
        <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded-md"></div>
        <div className="h-3 w-5/6 bg-gray-300 dark:bg-gray-700 rounded-md"></div>

        {/* Price Skeleton */}
        <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded-md mt-2"></div>
      </div>
    </div>
  );
};

export default MenuItemLoading;
