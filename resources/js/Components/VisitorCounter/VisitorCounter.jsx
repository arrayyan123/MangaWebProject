import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  // State for the count of visitors
  const [visitorCount, setVisitorCount] = useState(0);

  // Function to update the visitor count
  const updateVisitorCount = () => {
    // Get the previous count from local storage
    const prevCount = localStorage.getItem('visitorCount');
    // Increment the count by 1
    const newCount = parseInt(prevCount) + 1 || 1;
    // Update the count in local storage and state
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  };

  // Load the visitor count and increment on component mount
  useEffect(() => {
    // Get the previous count from local storage
    const prevCount = localStorage.getItem('visitorCount');
    // Increment the count by 1
    const newCount = parseInt(prevCount) + 1 || 1;
    // Update the count in local storage and state
    localStorage.setItem('visitorCount', newCount);
    setVisitorCount(newCount);
  }, []);

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md mt-60">
      <h2 className="text-2xl font-bold mb-4">Visitor Counter</h2>
      <p className="text-lg mb-2">Total Visitors: {visitorCount}</p>
    </div>
  );
}

export default VisitorCounter;
