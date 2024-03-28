import React from 'react';
import BgCover from '/public/Images/Background/Background5.jpg';
import GenshinCover from '/public/Images/Manga/GenshinCover.jpeg'
import BgBestManga from '/public/Images/Background/Background3.jpg'
import Cover1 from '/public/Images/Manga/CoverManga1.jpg'
import Cover2 from '/public/Images/Manga/CoverManga2.jpg'
import Cover3 from '/public/Images/Manga/CoverManga3.jpg';
import Trapezoid from '/public/Images/Manga/Assets/Trapezoid.png'
import Discord from "/public/Images/SocialMedia/Discord.png";
import Twitter from "/public/Images/SocialMedia/Twitter.png";
import Youtube from "/public/Images/SocialMedia/Youtube.png";
import Frames from '/public/Images/Manga/Assets/FramesSoc.png'
import { Fade, Slide} from 'react-awesome-reveal';


function CoverFirst() {
  let SocialMed = [
      {imgSource: Discord, link:""},
      {imgSource: Twitter, link:""},
      {imgSource: Youtube, link:""}
  ];
  let Genre = [
      {genre: 'Isekai', color: 'bg-red-500'}, 
      {genre:'Fantasy', color: 'bg-indigo-500'},
      {genre: 'Action', color: 'bg-green-500'},
      {genre: "Sci-Fi", color: 'bg-blue-500'},
      
  ];
  let Menu = [
      {name: 'Genre'},
      {name: 'Favourite'},
      {name: 'Season'},
  ];
  const [hovered, setHovered] = React.useState(null);
  const maxCardsPerRow = 5;


  const cards = [
    { imageSrc: Cover1 , description: "Yamada-kun to 7-nin no Majo" },
    { imageSrc: Cover2, description: "Bocchi the Rock! Gaiden: Hiroi Kikuri no Fukazake Nikki" },
    { imageSrc: Cover3, description: "Gekkan Shoujo Nozaki-kun" },
    { imageSrc: Cover1 , description: "Yamada-kun to 7-nin no Majo" },
    { imageSrc: Cover2, description: "Bocchi the Rock! Gaiden: Hiroi Kikuri no Fukazake Nikki" },
    { imageSrc: Cover3, description: "Gekkan Shoujo Nozaki-kun" },
    { imageSrc: Cover1 , description: "Yamada-kun to 7-nin no Majo" },
    { imageSrc: Cover2, description: "Bocchi the Rock! Gaiden: Hiroi Kikuri no Fukazake Nikki" },
    { imageSrc: Cover3, description: "Gekkan Shoujo Nozaki-kun" },
    { imageSrc: Cover1 , description: "Yamada-kun to 7-nin no Majo" },
    { imageSrc: Cover2, description: "Bocchi the Rock! Gaiden: Hiroi Kikuri no Fukazake Nikki" },
    { imageSrc: Cover3, description: "Gekkan Shoujo Nozaki-kun" },
    { imageSrc: Cover1 , description: "Yamada-kun to 7-nin no Majo" },
    { imageSrc: Cover2, description: "Bocchi the Rock! Gaiden: Hiroi Kikuri no Fukazake Nikki" },
    { imageSrc: Cover3, description: "Gekkan Shoujo Nozaki-kun" }
  ];

  return (
    <div className="relative">
        <div className='manga-section flex flex-row z-10 w-[1035px] items-center justify-center m-auto py-[140px] gap-9'>
            <Slide direction="right">
              <div>
                  <img src={GenshinCover} className='w-[1300px] h-auto rounded-xl' />
              </div>
              <div className='flex flex-col gap-10'>
                  <h1 className='text-[50px] font-genshin'>GENSHIN IMPACT</h1>    
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto assumenda sunt laudantium accusantium minima excepturi, sit aspernatur, mollitia dicta aperiam maxime explicabo hic dolore dolorem vero. Debitis illum dolore nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veniam eligendi veritatis esse autem nulla sed ad corporis, laboriosam voluptas laborum commodi? Ut, fugiat! Voluptas quia tempore debitis aperiam aspernatur.</p>
                  
                  <div className='genre-button flex flex-row gap-4'>
                  {
                      Genre.map((item, index)=>(
                          <a href=""><button key={index} className={`px-4 py-2 text-white rounded-lg ${item.color}`}>{item.genre}</button></a>
                      ))
                  }
                  </div>
              </div>
            </Slide>
            <div className='relative'>
                <div className="flex flex-col items-center justify-center z-10 absolute top-[120px] gap-4 left-0 right-0">
                    {
                    SocialMed.map((item, index)=>(
                      <div key={index} className="w-10 h-10 rounded-full border-5 border-gray-500 flex items-center justify-center ">
                          <a href={item.link}><img src={item.imgSource} className="w-6 hover:w-8 transition-all ease-in-out duration-150" /></a>
                      </div>
                    ))
                    }
                </div>
                <img src={Frames} className='h-[400px] w-[200px] -z-10'/>  
            </div>
        </div>
        <div className='blur-lg bg-red-100 w-full h-[190px] z-60 absolute mt-[700px] top-0 left-1/2 transform -translate-x-1/2 rounded-t-xl -translate-y-1/2'>
        </div>
        <div className='absolute inset-0 -z-10'>
            <img
                src={BgCover}
                className="object-cover opacity-40 w-full h-screen"
                alt="Venti"
            />
        </div>
        <div className='blur-lg bg-red-100 w-full h-[190px] z-60 absolute mt-[1500px] top-0 left-1/2 transform -translate-x-1/2 rounded-t-xl -translate-y-1/2'>
        </div>
        <div className="-mt-[48px]">
            <img src={BgBestManga} className="blur-md"alt="" />
        </div>
      <div className="bg-white w-[85%] h-auto z-20 absolute mt-[1140px] top-20 left-1/2 transform -translate-x-1/2 rounded-t-xl -translate-y-1/2 py-3">
          <div className="flex flex-row gap-[30%] my-5 ">
              <ul className='flex gap-20 items-center ml-6'>
                  {Menu.map(({ name }, i) => (
                      <li key={i} className='transition-all ease-in-out hover:underline cursor-pointer'>{name}</li>
                  ))}
              </ul>
              <div className="absolute top-5 right-0 w-auto h-[60px]">
                <img src={Trapezoid} alt="" className="w-[580px] h-full" />
                <h2 className='text-right text-[40px] mr-[20px] font-extrabold text-white -mt-[60px]'>Popular Seasonal Manga</h2>
              </div>
          </div>
          <div className="py-10 grid grid-cols-5 md:grid-cols-auto gap-8 mx-10">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg w-48 h-72 "
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <img
                  src={card.imageSrc}
                  alt="Card Image"
                  className="w-full h-auto transition duration-300 ease-in-out transform-gpu hover:scale-105"
                />
                {hovered === index && (
                  <Fade cascade>
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <Slide direction='up'>
                            <p className="text-white text-lg">{card.description}</p>
                        </Slide>
                      </div>
                  </Fade>
                )}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}

export default CoverFirst;
