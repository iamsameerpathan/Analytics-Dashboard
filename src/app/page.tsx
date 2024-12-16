"use client"; // Add this directive to indicate the file is a client-side component

import Image from "next/image";
import TabsComponent from "../lib/TabsComponent";
import DropdownComponent from "../lib/DropdownComponent";
import SkeletonLoader from "../lib/SkeletonLoader";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h1>
      </header>

      {/* Tabs Component */}
      <div className="mb-6">
        <TabsComponent />
      </div>

      {/* Dropdown for Filters */}
      <div className="flex justify-end mb-6">
        <DropdownComponent />
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <>
            {/* Example Card 1 */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">User Growth</h2>
              <p className="text-gray-600">Content for the first card goes here.</p>
            </div>

            {/* Example Card 2 */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Revenue</h2>
              <p className="text-gray-600">Content for the second card goes here.</p>
            </div>

            {/* Placeholder Chart */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Chart</h2>
              <div className="h-32 bg-blue-200 rounded"></div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
