import React, { useState } from 'react';

function Help() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [acknowledgmentNumber, setAcknowledgmentNumber] = useState('');
  const [blockchainId, setBlockchainId] = useState('');
  const [description, setDescription] = useState('');
  const [report, setReport] = useState(null);

  const handleFileChange = (event) => {
    setReport(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Create FormData object for file upload
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phoneNumber', phoneNumber);
    formData.append('acknowledgmentNumber', acknowledgmentNumber);
    formData.append('blockchainId', blockchainId);
    formData.append('description', description);
    if (report) {
      formData.append('report', report);
    }

    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log(result); // Handle response
      alert('Complaint filed successfully!');
    } catch (error) {
      console.error('Error filing complaint:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">File a Complaint</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
          <input
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div>
          <label htmlFor="acknowledgmentNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Acknowledgment Number</label>
          <input
            id="acknowledgmentNumber"
            type="text"
            value={acknowledgmentNumber}
            onChange={(e) => setAcknowledgmentNumber(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div>
          <label htmlFor="blockchainId" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Blockchain ID</label>
          <input
            id="blockchainId"
            type="text"
            value={blockchainId}
            onChange={(e) => setBlockchainId(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md shadow-sm dark:bg-gray-700 dark:text-gray-200"
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="report" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Upload Report (if available)</label>
          <input
            id="report"
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full border rounded-md dark:bg-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
}

export default Help;
