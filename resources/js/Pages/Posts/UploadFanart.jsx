import React, { useState } from 'react';
import axios from 'axios';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Navbar/Navbar';
import Bg1 from "../../../../public/Images/Background/Background1.jpg"
import { Fade } from 'react-awesome-reveal';



const UploadFanart = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [altText, setAltText] = useState('');
  const [title, setTitle] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const MAX_ALT_TEXT_LENGTH = 100;
  const MAX_TITLE_LENGTH = 25;

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setAltText('');
    setImagePreview(URL.createObjectURL(file));
  };

  const handleAltTextChange = (event) => {
    const text = event.target.value;
    if (text.length <= MAX_ALT_TEXT_LENGTH) {
      setAltText(text);
    }else{
      alert('Judul Melebihi');
    }
  };
  const handleTitleChange = (event) => {
    const text = event.target.value;
    if (text.length <= MAX_TITLE_LENGTH) {
      setTitle(text);
    }
  };


  const handleUpload = async () => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('altText', altText);
    formData.append('title', title);

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
      setTitle('');
    } catch (error) {
      console.error(error);
      setUploadMessage('Tidak sesuai dengan kriteria, coba lagi');
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
          <img src={Bg1} className='opacity-10 blur-sm' alt="" />  
        </div>
        <div className='top-40 mx-[500px] absolute flex flex-col items-center justify-center -' >
          <div className='flex flex-col items-center text-white '>
            <h1 className='font-bold mb-10 text-xl'>Upload your Fanart Here</h1>
            <input type="file" className='rounded-md ' accept="image/*" onChange={handleImageChange} />
            {imagePreview && (
              <Fade>
                <div className='m-4'>
                  <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
              </Fade>
            )}
            <div className="flex flex-col justify-center items-center my-2 ">
              <input type="text" placeholder="Description" className='text-black w-[400px] rounded-md' value={altText} onChange={handleAltTextChange} maxLength={MAX_TITLE_LENGTH} />
              <input type="text" className='text-black w-[400px] rounded-md' placeholder="Title" value={title} onChange={handleTitleChange} maxLength={MAX_TITLE_LENGTH} />
              <button className='bg-blue-600 py-2 px-10 m-2 rounded-md' onClick={handleUpload} disabled={!selectedImage|| !title || isUploading}>
                {isUploading ? 'Mengunggah...' : 'Unggah'}
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
