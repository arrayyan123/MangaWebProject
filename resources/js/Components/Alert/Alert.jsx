import React, { useState, useEffect } from 'react';

const Alert = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAlert, setShowAlert] = useState(false);
  const [timer, setTimer] = useState(10); // Timer starts at 10 seconds
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {

    if (windowWidth < 768) { 
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [windowWidth]);

  useEffect(() => {

    if (showAlert) {
      const intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
      setTimerId(intervalId);
      return () => clearInterval(intervalId);
    }
  }, [showAlert]);

  const handleClickContinue = () => {
    setShowAlert(false);
    clearInterval(timerId);
  };

  return (
    showAlert && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-700 bg-opacity-50 blur"></div>
        <div className="bg-white p-8 rounded-lg shadow-lg relative z-10">
          <h2 className="text-lg font-semibold mb-4">Window Width Alert</h2>
          <p>Your window width is: {windowWidth}px</p>
          <p>Click continue to dismiss this alert.</p>
          <p>Automatic dismissal in {timer} seconds.</p>
          <button
            onClick={handleClickContinue}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Continue
          </button>
        </div>
      </div>
    )
  );
};

export default Alert;
