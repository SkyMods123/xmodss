import React from 'react';

export const RelatedPostsSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="h-8 w-1/4 bg-neutral-200 rounded dark:bg-neutral-800 mb-4"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg overflow-hidden">
            <div className="h-48 bg-neutral-200 dark:bg-neutral-800"></div>
            <div className="p-4">
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-neutral-200 dark:bg-neutral-800 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
