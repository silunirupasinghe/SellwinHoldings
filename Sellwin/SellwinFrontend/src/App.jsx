import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/LOGO.jpg';
import logo1 from './assets/Sellwin logo Copy.jpg';
import slideshow1 from './assets/slideshow1.jpg';
import slideshow2 from './assets/slideshow2.jpg';
import Sectors from './pages/Sectors';
import Services from './pages/Services';

const images = [
  slideshow1,
  slideshow2,
];

function App() {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const prevSlide = () => {
    setImgIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setImgIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="banner bg-indigo-900 text-white">
        <h1 className="text-4xl pt-6 text-center font-semibold pb-10">HOME</h1>
      </div>

      {/* <div className="slideshow-container">
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <div
          className="slide"
          style={{ backgroundImage: `url(${images[imgIndex]})` }}
        >
          {console.log(`Current image: ${images[imgIndex]}`)}
        </div>
        <button className="next" onClick={nextSlide}>&#10095;</button>


      </div> */}
      <div className='container'>
        <Services />
      </div>
    </>
  );
}

export default App;
