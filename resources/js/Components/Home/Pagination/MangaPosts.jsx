import React, { useState } from 'react';
import { MangaList } from './MangaList';
import Slider from "react-slick";
import { GenresList } from '@/Components/Genre/GenresList';
GenresList

function MangaPosts() {
    const [selectedManga, setSelectedManga] = useState(null);
    const [selectedGenre, setSelectedGenre] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [listening, setListening] = useState(false);

    const itemsPerPage = 10;
    const itemsPerRow = 2;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(MangaList.length / itemsPerPage);

    const handleMangaClick = (manga) => {
        setSelectedManga(manga);
    };

    const handleGenreFilter = (genre) => {
        setSelectedGenre(selectedGenre === genre ? '' : genre);
        setCurrentPage(1); // Reset page to 1 when changing genre
    };

    const handleSearchInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
    };

    const startListening = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.onstart = () => {
            setListening(true);
        };
        recognition.onresult = event => {
            setSearchQuery(event.results[0][0].transcript);
        };
        recognition.onend = () => {
            setListening(false);
        };
        recognition.start();
    };

    const filteredManga = MangaList.filter((manga) => {
        const titleMatch = manga.title.toLowerCase().includes(searchQuery.toLowerCase());
        const genreMatch = selectedGenre === '' || manga.genres.some(genre => genre.name === selectedGenre);
        return titleMatch && genreMatch;
    });

    const currentManga = filteredManga.slice(startIndex, endIndex);

    const rows = [];
    let remainingManga = currentManga.slice();
    while (remainingManga.length > 0) {
        const rowItems = remainingManga.splice(0, itemsPerRow);
        rows.push(
            <div className="flex flex-row justify-around items-center m-2" key={rows.length}>
                {rowItems.map((manga, index) => (
                    <div key={index} className="flex flex-row gap-4 w-[560px] items-center">
                        <img src={manga.image} className="w-[180px] h-[300px] object-cover" alt="" />
                        <div className="flex flex-col gap-4">
                            <a href={`/manga/${manga.id}`} className="text-[40px] bg-transparent border-none cursor-pointer">
                                {manga.title}
                            </a>
                            <p>{manga.description}</p>
                            {manga.genres && manga.genres.length > 0 && (
                                <div className="genre-button flex flex-row gap-4 flex-wrap">
                                    {manga.genres.map((genre, index) => (
                                        <a href="#" key={index}>
                                            <button className={`px-4 py-2 text-white rounded-lg ${genre.color} ${index > 3 ? 'mt-0' : ''}`} onClick={() => handleGenreFilter(genre.name)}>
                                                {genre.name}
                                            </button>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="relative">
                <h1 className="text-[50px] text-center py-4">All Manga</h1>
                <div className="slider-container">
                    <Slider {...settings}>
                        {GenresList.map((genre, index) => (
                            <div key={index}>
                                <button className={`px-4 py-2 text-white rounded-lg ${genre.color}`} onClick={() => handleGenreFilter(genre.name)}>
                                    {genre.name}
                                </button>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="relative flex justify-center my-10">
                    <input
                        type="text"
                        placeholder="Search manga by title..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <button type="button" className="absolute right-4 top-1/2 transform -translate-y-1/2" onClick={startListening}>
                        {listening ? 'Listening...' : 'Voice Search'}
                    </button>
                </div>
                {rows}
            </div>
            <div className="pagination flex items-center justify-center m-10">
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => changePage(index + 1)}
                        className={`px-4 py-2 mx-1 ${
                            currentPage === index + 1 ? 'bg-gray-500' : 'bg-gray-200'
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default MangaPosts;
