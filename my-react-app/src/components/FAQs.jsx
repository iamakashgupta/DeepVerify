import React from 'react';

function FAQs() {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <dl>
        <dt className="font-semibold">What is a deepfake?</dt>
        <dd className="mb-4">A deepfake is a synthetic media in which a person's likeness is replaced with someone else's, often using AI techniques.</dd>

        <dt className="font-semibold">How can I detect deepfakes?</dt>
        <dd className="mb-4">Detection methods include analyzing facial inconsistencies, using machine learning models, and checking metadata.</dd>

        {/* Add more FAQs here */}
      </dl>
    </section>
  );
}

export default FAQs;
