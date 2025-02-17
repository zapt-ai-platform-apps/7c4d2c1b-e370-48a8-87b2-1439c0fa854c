import React, { useEffect } from 'react';
import TikTokGuide from './components/TikTokGuide';

export default function App() {
  useEffect(() => {
    console.log("Landing page loaded: TikTok Growth Tips displayed.");
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">TikTok Growth Tips</h1>
          <nav>
            <a href="#" className="mr-4 text-gray-600 hover:text-gray-800 cursor-pointer">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800 cursor-pointer">
              About
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Get More Likes and Followers on TikTok
          </h2>
          <p className="text-lg text-gray-700">
            Discover actionable strategies and proven tips to boost your TikTok presence.
          </p>
          <button
            onClick={() => console.log("Call-to-action button clicked")}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full cursor-pointer hover:bg-blue-700 transition-colors"
            disabled={false}
          >
            Learn More
          </button>
        </section>

        {/* TikTok Guide Section */}
        <TikTokGuide />
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-gray-600 text-sm">
            © {new Date().getFullYear()} TikTok Growth Tips. All rights reserved.
          </div>
          <a
            href="https://www.zapt.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm cursor-pointer"
          >
            Made on ZAPT
          </a>
        </div>
      </footer>
    </div>
  );
}