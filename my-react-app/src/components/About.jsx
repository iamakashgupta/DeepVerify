import React from 'react';

function About() {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100 w-full h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">About This Website</h2>
      <p className="mb-4">
        Welcome to the Deepfake Detection System. This website allows you to upload videos and check them for deepfake content using advanced AI/ML techniques. Our goal is to help identify and mitigate the impact of deepfakes on digital media.
      </p>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">How It Functions</h3>
      <p className="mb-4">
        The system utilizes various algorithms, including Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs), to analyze video files. The detection process includes examining inconsistencies in facial features, movements, and audio-visual synchronization.
      </p>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">What Are Deepfakes?</h3>
      <p>
        Deepfakes are synthetic media where a person's face or voice is replaced with another's using AI technology. They can be used maliciously to create misleading content, defame individuals, or spread misinformation. Detecting these altered media is crucial for maintaining digital integrity.
      </p>
    </section>
  );
}

export default About;
