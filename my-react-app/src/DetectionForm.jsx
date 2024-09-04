import React, { useState } from 'react';

function DetectionForm({ onSubmit }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      onSubmit(formData);
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100 w-full h-full flex flex-col" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Upload Video for Detection</h2>
      
      <div className="mb-4">
        <label htmlFor="file-upload" className="block text-gray-700 text-sm font-medium mb-2 dark:text-gray-300">
          Video File
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={handleFileChange}
          className="block w-full text-gray-800 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:focus:ring-blue-400"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
      >
        Upload Video
      </button>
    </form>
  );
}

export default DetectionForm;
