import React, { useRef, useState, useEffect } from "react";
import Header from "./components/Hearder";
import Hero from "./section/Hero";
import About from "./section/About";
import StaionedImage from "./components/StationaryImage";
import Service from "./section/Service";
import ServiceExport from "./section/ServiceExport";
import ReplacementAbout from "./section/ReplacementAbout";
import ReplacementNew from "./section/About-new";
import "./style/loading.css";
import imageCardImport1 from "./assets/images/Products/replacement-sesame-seeds.webp";
import imageCardImport3 from "./assets/images/Products/replacement-Niger-Seed.webp";
import imageCardImport2 from "./assets/images/Products/soyaBean-replacement-2.webp";
import imageCardImport4 from "./assets/images/Products/red-speckled-kidney-beans-659.webp";
import imageCardImport5 from "./assets/images/Products/Mung_Bean.webp";
import imageCardImport6 from "./assets/images/Products/Unroasted-coffee.webp";

import imageCardExport1 from "./assets/images/Products/Replacement-Tyer.webp";
import imageCardExport3 from "./assets/images/Products/replacement-rebar-boxed.webp";
import imageCardExport2 from "./assets/images/Products/replacement-truck.webp";
import imageCardExport4 from "./assets/images/Products/pePlastic.webp";
import imageCardExport5 from "./assets/images/Products/ceramic.webp";
import imageCardExport6 from "./assets/images/Products/replacement-construction-material.webp";

import backgroudWhiteImage from "./assets/images/pattern_background.webp";
import sliderImage1 from "./assets/images/tyre2.webp";
import sliderImage2 from "./assets/images/sackofgrain-slider.webp";
import sliderImage3 from "./assets/images/industrialChemicals1-1.webp";

import image1 from "./assets/images/background-for-section.webp";
import image2 from "./assets/images/polina-rytova-1dGMs4hhcVA-unsplash.webp";

import loadingImage from "./assets/images/gear.webp";

import Contact from "./section/Contact";
import ContactForm from "./section/ContactForm";

// Component to load multiple images
const ImageLoader = ({ onAllImagesLoaded }) => {
    const [loadedImagesCount, setLoadedImagesCount] = useState(0);
    const totalImages = 4; // The three slider images + the background image

    useEffect(() => {
        const images = [
            backgroudWhiteImage,
            sliderImage1,
            sliderImage2,
            sliderImage3,
        ];

        images.forEach((src) => {
            const img = new Image();
            img.src = src;

            img.onload = () => {
                setLoadedImagesCount((prevCount) => prevCount + 1);
            };

            img.onerror = () => {
                console.error(`Image failed to load: ${src}`);
            };
        });
    }, []);

    // When all images are loaded, call the callback
    useEffect(() => {
        if (loadedImagesCount === totalImages) {
            onAllImagesLoaded(); // All images are loaded
        }
    }, [loadedImagesCount, totalImages, onAllImagesLoaded]);

    return null; // Render nothing while loading images
};

function App() {
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    const imagesForServiceImported = [
        imageCardImport1,
        imageCardImport2,
        imageCardImport3,
        imageCardImport4,
        imageCardImport5,
        imageCardImport6,
    ];

    const imagesForServiceExported = [
        imageCardExport1,
        imageCardExport2,
        imageCardExport3,
        imageCardExport4,
        imageCardExport5,
        imageCardExport6,
    ];

    const HeroRef = useRef(null);
    const AboutRef = useRef(null);
    const ServiceRef = useRef(null);
    const ContactRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        if (sectionRef && sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            {/* Load images and show content only when all images are loaded */}
            <ImageLoader onAllImagesLoaded={() => setAllImagesLoaded(true)} />

            {allImagesLoaded ? (
                <div className="App">
                    <Header
                        scrollToSection={scrollToSection}
                        AboutRef={AboutRef}
                        HeroRef={HeroRef}
                        ServiceRef={ServiceRef}
                        ContactRef={ContactRef}
                    />
                    <Hero
                        ref={HeroRef}
                        scrollToSection={scrollToSection}
                        AboutRef={AboutRef}
                        ServiceRef={ServiceRef}
                        backgroudWhiteImage={backgroudWhiteImage}
                        sliderImages={[
                            sliderImage1,
                            sliderImage2,
                            sliderImage3,
                        ]}
                    />
                    <div className="Golder_Segment"></div>
                    <ReplacementNew
                        ref={AboutRef}
                        scrollToSection={scrollToSection}
                        ServiceRef={ServiceRef}
                    />
                    <StaionedImage image={image1} />
                    <Service
                        title={"Export "}
                        images={imagesForServiceImported}
                        ref={ServiceRef}
                    />
                    <StaionedImage image={image2} />
                    <ServiceExport
                        title={"Import "}
                        images={imagesForServiceExported}
                    />
                    <Contact ref={ContactRef} />
                    <ContactForm />
                </div>
            ) : (
                <div class="loader-container">
                    <div class="gear">
                        <img src={loadingImage} />
                    </div>
                </div> // You can replace this with a spinner or a loading indicator
            )}
        </div>
    );
}

export default App;
