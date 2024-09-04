import React from 'react';

function DetectionResults({ results }) {
  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([JSON.stringify(results, null, 2)], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'report.txt';
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  return (
    <div className="mt-8 p-4 border border-gray-300 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Detection Report</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(results, null, 2)}
      </pre>
      <button
        onClick={handleDownload}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
      >
        Download Report
      </button>
    </div>
  );
}

export default DetectionResults;
