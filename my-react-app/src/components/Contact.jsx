import React, { useState } from 'react';

function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <section className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          required
        />
        <label htmlFor="message" className="text-gray-700 dark:text-gray-300">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
          rows="4"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-500 transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      <div className="mt-4">
        <a
          href="https://cybercrime.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-400"
        >
          Report Cyber Crime to Indian Government
        </a>
      </div>
    </section>
  );
}

export default Contact;
