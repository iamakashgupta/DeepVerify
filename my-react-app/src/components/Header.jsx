import React from 'react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 flex flex-col items-center justify-center shadow-lg dark:bg-gradient-to-r dark:from-blue-900 dark:to-blue-1000">
      <h1 className="text-4xl font-extrabold mb-2 animate-fadeIn">Deep Fake Detection</h1>
      <p className="text-lg font-medium mb-4">
        Ensuring the authenticity of digital media through advanced technology.
      </p>
    </header>
  );
}

export default Header;
