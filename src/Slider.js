import React, { useState, useEffect } from 'react';
import './slider.css'; 

function Slideshow({ images, interval = 3000 }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(intervalId);
    }, [images.length, interval]);

    return (
        <div className="slideshow-container">
            {images.map((image, i) => (
                <div
                    key={i}
                    className={i === index ? "slide active" : "slide"}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}
        </div>
    );
}

export default Slideshow;
