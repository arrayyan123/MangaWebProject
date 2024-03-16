import Footer from '@/Components/Footer/Footer';
import { MangaList } from '@/Components/Home/Pagination/MangaList';
import Navbar from '@/Components/Navbar/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react';


function MangaDetail({ mangaId }) {
    const manga = MangaList.find(item => item.id === mangaId);

    if (!manga) {
        return <div>Loading...</div>;
    }

    return (
      <>
        <Head title='Manga Info' />
        <header>
            <Navbar />
        </header>
        <div className='relative'>
          <div className='bg-gray-400 w-auto h-auto relative '>
            <a href={`/home`}><button type="button" className="text-white z-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 absolute top-[150px] left-[90px] mt-4 ml-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Go Back</button></a>
            <img src={manga.image} className='w-full h-[400px] opacity-40 object-cover ' alt="" />
          </div>
          <div className='bg-white h-auto w-[85%] -mt-20 mx-[7.5%] absolute p-10 rounded-t-[20px]'>
            <div className='flex flex-row items-center w-[80%] gap-6 m-auto'>
              <div className="flex flex-col">
                  <img src={manga.image} className="w-[280px]" alt={manga.title} />
              </div>
              <div className='flex flex-col '>
                  <h1 className='text-[40px]'>{manga.title}</h1>
                  <p>Description: {manga.description}</p>
                  <p>Author: {manga.author}</p>
                  <p>Genre: {manga.genre}</p>
                  <div className="genre-button flex flex-row gap-4 flex-wrap">
                      {manga.genres && manga.genres.map((genre, index) => (
                          <a href="#" key={index}>
                              <button className={`px-4 py-2 text-white rounded-lg ${genre.color} ${index > 3 ? 'mt-0' : ''}`}>
                                  {genre.name}
                              </button>
                          </a>
                      ))}
                  </div>
              </div>
            </div>
          </div>  
        </div>
        <section>
          
        </section>
        <section>

        </section>
        <Footer />
      </>
    );
}

export default MangaDetail;
