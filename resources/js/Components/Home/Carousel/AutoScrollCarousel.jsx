import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MangaList } from '../Pagination/MangaList'; 

function AutoScrollCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {MangaList.map((manga, index) => (
                    <div key={index} className="w-full mt-[230px] mx-2 ">
                        <img src={manga.image} className="w-[460px] h-[280px] object-cover object-top" alt={manga.title} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default AutoScrollCarousel;
