import React from 'react';
import { FaEye, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

function Statistics() {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800 dark:text-gray-200 text-center">Deepfake Detection Statistics</h2>
      <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 text-center">
        Our platform is committed to identifying and addressing deepfake videos with accuracy and speed. Here’s an overview of our key statistics.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-blue-100 p-6 rounded-lg dark:bg-blue-900 dark:text-blue-200 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaEye className="text-4xl text-blue-800 dark:text-blue-300" />
          <div>
            <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300">Detected Deepfakes</h3>
            <p className="text-3xl font-bold">1200+</p>
            <p className="text-gray-600 dark:text-gray-400">Deepfake videos detected by our advanced algorithms.</p>
          </div>
        </div>
        <div className="bg-green-100 p-6 rounded-lg dark:bg-green-900 dark:text-green-200 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaCheckCircle className="text-4xl text-green-800 dark:text-green-300" />
          <div>
            <h3 className="text-xl font-semibold text-green-800 dark:text-green-300">Validated Videos</h3>
            <p className="text-3xl font-bold">3000+</p>
            <p className="text-gray-600 dark:text-gray-400">Videos confirmed as authentic by our validation process.</p>
          </div>
        </div>
        <div className="bg-red-100 p-6 rounded-lg dark:bg-red-900 dark:text-red-200 flex items-center space-x-4 shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaExclamationTriangle className="text-4xl text-red-800 dark:text-red-300" />
          <div>
            <h3 className="text-xl font-semibold text-red-800 dark:text-red-300">Reported Cases</h3>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-gray-600 dark:text-gray-400">Cases reported by users for further investigation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
