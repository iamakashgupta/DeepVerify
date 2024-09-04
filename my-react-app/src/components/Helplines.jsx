import React from 'react';

function Helplines() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Helplines</h2>
      <ul>
        <li className="mb-2">
          <a href="https://www.cybercrime.gov.in/" className="text-blue-600 dark:text-blue-400 hover:underline">
            Indian Cyber Crime Portal
          </a>
        </li>
        <li className="mb-2">
          <a href="https://www.nci.gov.in/" className="text-blue-600 dark:text-blue-400 hover:underline">
            National Cyber Coordination Centre
          </a>
        </li>
        {/* Add more helplines here */}
      </ul>
    </section>
  );
}

export default Helplines;
