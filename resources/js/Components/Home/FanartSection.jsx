import React, { useState, useEffect } from 'react';
import axios from 'axios';


function FanartSection() {
  const [fanarts, setFanarts] = useState([]);

  useEffect(() => {
    const fetchFanartUrls = async () => {
      try {
        const response = await axios.get('/fanart-urls');
        const fanartUrls = response.data.fanartUrls;
        const chunkSize = 5;
        const chunkedFanarts = [];
        for (let i = 0; i < fanartUrls.length; i += chunkSize) {
          chunkedFanarts.push(fanartUrls.slice(i, i + chunkSize).map((url, index) => ({
            imageUrl: url,
            altText: `Fanart ${(i / chunkSize) + index + 1}`
          })));
        }
        setFanarts(chunkedFanarts);
      } catch (error) {
        console.error('Error fetching fanart URLs:', error);
      }
    };

    fetchFanartUrls();
  }, []);

  return (
    <div className='relative'>
      <div className="w-full bg-babyblue h-[100%] pb-20">
        <div className='flex items-center justify-center'>
          <h1 className='text-[50px] text-center'>Fanart Gallery</h1> 
          
        </div>
        <div className=' border-solid w-[60%] border-[1px] border-black m-auto mb-2'></div>
        <div className="flex flex-col gap-4 items-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[200px] rounded mb-5"
            onClick={() => window.location.href = '/upload-fanart'}
          >
            Upload Fanart
          </button>
          {fanarts.map((artlist, index) => (
            <div key={index} className="flex flex-row gap-4 m-auto ">
              {artlist.map((item, index) => (
                <div key={index} className="flex">
                  <img src={item.imageUrl} alt={item.altText} className="w-[200px] h-[200px] transition-all ease-in-out duration-300 hover:w-[600px] hover:h-[400px] object-cover object-top" />
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
