import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FanartSection() {
  const [fanarts, setFanarts] = useState([]);

  useEffect(() => {
    const fetchFanartData = async () => {
      try {
        const response = await axios.get('/fanart-urls');
        const fanartUrls = response.data.fanartUrls;
        const fanartData = await Promise.all(fanartUrls.map(async (url) => {
          const imageUrl = url;
          const titleResponse = await axios.get(`/fanart-title?imageUrl=${imageUrl}`);
          const title = titleResponse.data.title;
          return { imageUrl, title };
        }));

        const chunkedFanarts = [];
        const chunkSize = 5;
        for (let i = 0; i < fanartData.length; i += chunkSize) {
          chunkedFanarts.push(fanartData.slice(i, i + chunkSize));
        }
        setFanarts(chunkedFanarts);
      } catch (error) {
        console.error('Error fetching fanart data:', error);
      }
    };

    fetchFanartData();
  }, []);

  return (
    <div className='relative'>
      <div className="w-full bg-babyblue h-[100%] pb-20">
        <div className='flex items-center justify-center'>
          <h1 className='text-[50px] text-center font-bold text-white'>Fanart Gallery</h1> 
        </div>
        <div className=' border-solid w-[60%] border-[1px] border-white m-auto mb-2'></div>
        <div className="flex flex-col gap-4 items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[200px] rounded mb-5"
            onClick={() => window.location.href = '/upload-fanart'}
          >
            Upload Fanart
          </button>
          {fanarts.map((chunk, index) => (
            <div key={index} className="flex flex-row gap-4 m-auto">
              {chunk.map((fanart, fanartIndex) => (
                <div key={fanartIndex} className="flex flex-col items-center">
                  <img src={fanart.imageUrl} alt="Fanart" className="w-[200px] h-[200px] transition-all ease-in-out duration-300 hover:w-[600px] hover:h-[400px] object-cover object-top" />
                  <p className="text-white">{fanart.title}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FanartSection;
