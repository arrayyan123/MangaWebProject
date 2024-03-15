import React, { useState } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar/Navbar';
import Bg1 from "../../../../public/Images/Background/Background1.jpg"
import { Fade } from 'react-awesome-reveal';



const UploadFanart = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [altText, setAltText] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setAltText('');
    setImagePreview(URL.createObjectURL(file));
  };

  const handleAltTextChange = (event) => {
    setAltText(event.target.value);
  };

  const handleUpload = async () => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('altText', altText);

    try {
      const response = await axios.post('/upload-fanart', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadMessage(response.data.message);
      setSelectedImage(null);
      setAltText('');
      setImagePreview(null);
    } catch (error) {
      console.error(error);
      setUploadMessage('Error uploading fanart.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <Head title='Fanart Upload' />
      <header>
        <Navbar/>
      </header>
      <div className='relative'>
        <div className=' bg-gray-700 w-auto h-auto relative '>
          <img src={Bg1} className='opacity-10' alt="" />  
        </div>
        <div className='top-40 mx-[550px] absolute flex flex-col items-center justify-center' >
          <div className='flex flex-col items-center text-white '>
            <h2 className='font-bold'>Upload Fanart</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <Fade>
                <div className='m-4'>
                  <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
              </Fade>
            )}
            <div className="flex flex-col justify-center items-center my-2">
              <input type="text" placeholder="Alt Text" value={altText} onChange={handleAltTextChange} />
              <button onClick={handleUpload} disabled={!selectedImage || isUploading}>
                {isUploading ? 'Uploading...' : 'Upload'}
              </button>
              {uploadMessage && <p>{uploadMessage}</p>}
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
};

export default UploadFanart;
