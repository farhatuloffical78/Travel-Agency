import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel 
                className='autoPlay'
                autoPlay={true}  // Enables autoplay
                interval={3000}  // Set the time between each slide transition (in milliseconds)
                infiniteLoop={true}  // Loops the carousel indefinitely
                showArrows={false}  // Optional: Hides navigation arrows if you don't want them
                showThumbs={false}  // Optional: Hides thumbnail navigation
                transitionTime={500}  // Optional: Controls the transition duration between slides
            >
                <div>
                    <img src={banner1} alt="Banner 1" />
                </div>
                <div>
                    <img src={banner2} alt="Banner 2" />
                </div>
                <div>
                    <img src={banner3} alt="Banner 3" />
                </div>
                <div>
                    <img src={banner4} alt="Banner 4" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
