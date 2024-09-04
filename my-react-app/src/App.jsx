import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DetectionForm from './DetectionForm';
import About from './components/About';
import Statistics from './components/Statistics';
import Contact from './components/Contact';
import Help from './components/Help';
import Profile from './components/Profile';
import Login from './pages/Login';
import News from './components/News';
import FAQs from './components/FAQs';
import Helplines from './components/Helplines';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
          <Navbar onToggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Header />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

function Home() {
  const location = useLocation();

  // Only show FAQs, News, and Helplines on the home page
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 p-4">
          <DetectionForm />
        </div>
        <div className="lg:w-1/2 p-4">
          <About />
        </div>
      </div>
      {location.pathname === '/' && (
        <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <FAQs />
          </div>
          <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <News />
          </div>
          <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <Helplines />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
