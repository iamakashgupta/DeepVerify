import React from 'react';

function News() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Latest News</h2>
      <ul>
        <li className="mb-2">
          <a href="https://example.com/news1" className="text-blue-600 dark:text-blue-400 hover:underline">
            Breaking News 1
          </a>
        </li>
        <li className="mb-2">
          <a href="https://example.com/news2" className="text-blue-600 dark:text-blue-400 hover:underline">
            Breaking News 2
          </a>
        </li>
        {/* Add more news items here */}
      </ul>
    </section>
  );
}

export default News;
